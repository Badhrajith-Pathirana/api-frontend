import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  env = environment;

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<any>{
    return this.http.get(this.env + '/users');
  }

  getUserById(userId): Observable<any> {
    return this.http.get(this.env + '/members/' + userId);
  }

  updateUser(userData): Observable<any> {
    return this.http.put(this.env + '/members/' + userData.id, userData);
  }


}
