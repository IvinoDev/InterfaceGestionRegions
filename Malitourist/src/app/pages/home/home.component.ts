import { ImageService } from './../../service/image.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { RegionService } from 'src/app/service/region.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // user: any;
  // list: any;

  // constructor(private regionService: RegionService, private imageService: ImageService) { 

  // }

  ngOnInit(): void {
  //   this.user = JSON.parse(localStorage["user"]);
  //   this.getRegions();

  }

  // getRegions() {
  //   return this.regionService.getRegions(this.user.accessToken).pipe(map((i:any) => this.imageService.createImage(i))).subscribe(res => {
  //     this.list = res;
  //     console.log(res);
      
  //   })
  // }





}
