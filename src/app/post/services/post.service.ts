import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost, IPostRequestDto } from '../models/post.intestfaces';
import { Invirontment } from 'src/app/Invironment';
import { PageResultDto } from 'src/app/common/models/PageResultDto';

@Injectable({
    providedIn: 'root'
})
export class PostService {
  invirontment: Invirontment;
  constructor(private httpClient: HttpClient) {
    this.invirontment = new Invirontment();
  }

  CreatePost(post: IPost): Observable<any> {
    var apiUrl = this.invirontment.CreatePost;
    return this.httpClient.post<IPost>(apiUrl, post);
  }

  UpdatePost() {
    
  }

  getNewsFeedPosts(postRequest: IPostRequestDto): Observable<any> {
    var apiUrl = this.invirontment.GetNewsFeedPost;
    return this.httpClient.post<PageResultDto<IPost>>(apiUrl, postRequest)
  }
}
