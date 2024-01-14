import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { PageResultDto } from 'src/app/common/models/PageResultDto';
import { IPost } from 'src/app/post/models/post.intestfaces';
import { Post } from 'src/app/post/models/post.models';
import { PostService } from 'src/app/post/services/post.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})

export class NewsFeedComponent implements OnInit {
  post: IPost;
  userId: string = '9881f872-e6cc-4d4d-bc22-3ea38fcd06d2';
  response: PageResultDto<IPost> = {items: [], totalCount: 0} as PageResultDto<IPost>;

  constructor(
    private postService: PostService) {
    this.post = new Post();
  }

  ngOnInit(): void {
    this.getNewsFeedPosts();
  }

  Post(f: NgForm): void {
    const successCallback = (response: any) => {
      alert("alert");
    };

    this.post.content = f.value.post;
    this.post.authorID = '9881f872-e6cc-4d4d-bc22-3ea38fcd06d2';
    this.post.createdBy = 'Eimdadul';
    this.postService
      .CreatePost(this.post)
      .subscribe((response) => successCallback(response));
  }

  getNewsFeedPosts(): void {
    const successCallback = (response: any) => {
      debugger
      this.response = response;
    }

    this.postService.getNewsFeedPosts(this.userId)
    .subscribe(response => successCallback(response))
  }
}
