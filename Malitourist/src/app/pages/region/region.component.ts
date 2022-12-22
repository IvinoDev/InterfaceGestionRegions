import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ImageService } from 'src/app/service/image.service';
import { RegionService } from 'src/app/service/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  user: any;
  list: any;

  constructor(private regionService: RegionService, private imageService: ImageService) { 

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage["user"]);
    this.getRegions();

  }

  getRegions() {
    return this.regionService.getRegions(this.user.accessToken).subscribe(res => {
      this.list = res;
      for (let index = 0; index < this.list.length; index++) {
        this.imageService.createImage(this.list[index]);  
        
        
      }
      
      console.log(this.list);
      
    })
  }






}
