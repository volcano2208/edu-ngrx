import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.postUrl);
  }
}
