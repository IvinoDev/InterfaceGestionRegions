import { HttpHeaders } from '@angular/common/http';
// import { baseUrl, environment, localhost } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { Regions } from 'src/app/models/regions';
import { ApiResponse } from '../models/apiresponse';
import { environment } from 'src/environments/environment';
// import { environment } from '../environments';


@Injectable({
  providedIn: 'root'
})
export class RegionService {
  // baseUrl = environment;

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl +'/regions/';

  

  getRegions(token: string)  {
    let header = new HttpHeaders({
      Authorization: "Bearer " + token
    })

    return this.http.get(this.baseUrl + "list", {headers: header});
  }

  getRegionById(token: string, id: number): Observable<any> {
    let header = new HttpHeaders({
      Authorization: "Bearer " + token
    })
    return this.http.get(this.baseUrl + "find/" + id, {headers: header});
  }

  createRegion(regions: Regions): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, regions);
  }

  updateRegion(id: number, regions: Regions): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + regions.id, regions);
  }

  deleteRegion(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
