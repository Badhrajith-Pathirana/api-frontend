import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  env = environment;

  constructor(
    private http: HttpClient
  ) {
  }

  getAllCategories(): Observable<any> {
    return this.http.get(this.env + '/categories');
  }

  createPost(postData): Observable<any> {
    return this.http.post(this.env + '/post', postData);
  }
}
