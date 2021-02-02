import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private configUrl: string = "https://run.mocky.io/v3/e7abc82b-a260-4ce9-be27-974bd2ef6481";
  constructor(private http: HttpClient) {
   }

   public getUserInfos(): Observable<User[]> {
     const userInfosRequest = this.http.get<User[]>(this.configUrl);
     return userInfosRequest
   }
}
