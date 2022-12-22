import { Regions } from './../models/regions';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from 'src/app/models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private sanitizer: DomSanitizer ) { }

  createImage(models: Regions){
    // recuperer l'image en json
    const modelsImage: any = models.image;
    // Transformer le bypte de l'mage en blob() {**bytes et types** viennent de la base de donneés}
    console.log(models);
    
    const imgageBlob = this.ImageUrlToBlob(modelsImage.bytes, modelsImage.type);
    // recuperer l'image avec son type et son nom
    const imageFile = new File([imgageBlob],modelsImage.name, {type: modelsImage.type})

    // l'image finale---***----
    const finalImage : Image = {
      file: imageFile,
      url : this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    }

    // ----Donnee l'image final transformer à models
    models.image = finalImage;
    return models;
  }

  // Cette fonction permet transformer le byte en blob image
  ImageUrlToBlob(picByte: any, imageType: any){
    const ByteString = window.atob(picByte);
    const arrayBuffer = new ArrayBuffer(ByteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let index = 0; index < ByteString.length; index++) {
      uintArray[index]= ByteString.charCodeAt(index)
    }
    const blob = new Blob([uintArray], {type: imageType})
    return blob;
  }
}