import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { PageResultDto } from 'src/app/common/models/PageResultDto';
import { IPost, IPostRequestDto } from 'src/app/post/models/post.intestfaces';
import { Post, PostRequest } from 'src/app/post/models/post.models';
import { PostService } from 'src/app/post/services/post.service';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})

export class NewsFeedComponent implements OnInit {

  post: IPost;
  userId: string = '9881f872-e6cc-4d4d-bc22-3ea38fcd06d2';
  response: PageResultDto<IPost> = {items: [], totalCount: 0} as PageResultDto<IPost>;
  postRequest: IPostRequestDto = new PostRequest();
  
  currentPage: number = 0;
  totalPages: number = 0;
  skipCount: number = 0;
  maxCount: number = 2;
  totalCount: number = 0;
  loading: boolean = false; 
  loadCount: number = 1; 

  @ViewChild(PaginationComponent) 
  paginationComponent: PaginationComponent = new PaginationComponent(); 

  constructor(
    private postService: PostService, 
    private changeDetectorRef: ChangeDetectorRef) {
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
    this.postService.CreatePost(this.post)
      .subscribe((response) => successCallback(response));
  }

  getNewsFeedPosts(): void {
    const successCallback = (response: any) => {
      this.response = response;
      this.paginationComponent.totalCount = response.totalCount;
      this.paginationComponent.ngOnInit();
      this.changeDetectorRef.detectChanges();
    }

    this.postRequest.skipCount = this.skipCount;
    this.postRequest.maxCount = this.maxCount;
    this.postService.getNewsFeedPosts(this.postRequest)
        .subscribe(response => successCallback(response));
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.skipCount = (page - 1) * this.maxCount;
    this.getNewsFeedPosts();
  }

  LoadMore(): void {
    this.postRequest.loadCount++;
    this.getNewsFeedPosts();
  }
}
