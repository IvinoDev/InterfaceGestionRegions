import { Regions } from './../../../../../models/regions';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Image } from './../../../../../models/image';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-addregion',
  templateUrl: './addregion.component.html',
  styleUrls: ['./addregion.component.scss']
})
export class AddregionComponent implements OnInit {

  models: any;
  user: any;
  regions: Regions = {
    id: 0,
    codeRegions: "",
    nom: "",
    langue: "",
    superficie_regions: 0,
    domaine_activite: "",
    src: "",
    image: {
      file: new File(["test"],'text.png',{type: 'application/json'}),
      url: ''
    }
    
};
  
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit(): void {
    if (localStorage["user"]) {
      this.user = JSON.parse(localStorage["user"]);
    }
  }

  onSubmit(form: any) {
    console.log(this.regions);
    
    const formData = this.prepareFormdata(this.regions)
    console.log(this.user.accessToken);

    
    let header = new HttpHeaders({
      Authorization: "Bearer " + this.user.accessToken
    })
    return this.http.post("http://localhost:8080/regions/create", formData, {headers: header}).subscribe(data => {
      console.log(data);
      
    })
  }

  // Fonction pour preparer le fichier + les informations de models comme l'est dans l'api
  prepareFormdata(models: any): FormData{
    const formdata = new FormData();
    // donner le resquestPart de l'api
    formdata.append(
      "regions",
      new Blob([JSON.stringify(models)],{type: 'application/json'})
    );
    formdata.append(
      "image",
      models.image.file,
      models.image.file.name
    );
    return formdata;
  }

  // Cette fonction permet de recuperer l'image selectione
  OnFileSelect(event: any){
    // console.log(event.target.files[0]);

    if(event.target.files){
      const file = event.target.files[0];
      const Image : Image ={
        file : file,
        url : this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      }
      this.models.image = Image;
    }
    //console.log(event);
  }

}

//}
