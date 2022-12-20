import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  data: any;

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    console.log("login data retrieved");
    return this.http.post('${baseUrl}/login', data);
  }
}
