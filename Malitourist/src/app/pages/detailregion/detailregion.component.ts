import { RegionService } from 'src/app/service/region.service';
import { ImageService } from 'src/app/service/image.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-detailregion',
  templateUrl: './detailregion.component.html',
  styleUrls: ['./detailregion.component.scss']
})
export class DetailregionComponent implements OnInit {
  user:any;
  region:any;

  constructor(private imageService: ImageService, private regionService: RegionService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage["user"]);
    this.findRegionById();
    
  }

  findRegionById() {
    return this.regionService.getRegionById(this.user.accessToken, 1).pipe(map((index:any) => this.imageService.createImage(index))).subscribe(res => {
      this.region = res;
      console.log(this.region);
      
    });
  }

  
  
}
