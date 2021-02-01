import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private configUrl: string = "https://run.mocky.io/v3/0eedb9e4-7990-43db-81d3-436058a314df";
  constructor(private http: HttpClient) {
   }

   public getUserInfos(): Observable<any> {
     const userInfosRequest = this.http.get(this.configUrl);
     return userInfosRequest
   }
}
