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

  
}
