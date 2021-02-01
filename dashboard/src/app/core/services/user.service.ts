import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private configUrl: string = "https://run.mocky.io/v3/2c8d8315-2d2a-4986-bb24-62f4e1d853f4";
  constructor(private http: HttpClient) {
   }

   public getUserInfos(): Observable<any> {
     const userInfosRequest = this.http.get(this.configUrl);
     return userInfosRequest
   }
}
