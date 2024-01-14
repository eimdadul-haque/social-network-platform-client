import { Component } from '@angular/core';
import { IPost } from '../models/post.intestfaces';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  blogPhotoUrl: string ='https://wallpapers.com/images/hd/hd-river-in-the-mountains-kgb9wrcm1wmrfa5m.webp';
  post: IPost;

  constructor() {
    this.post = new Post();
    this.makeFakePost();
  }

  readMore(id: any): void {}

  makeFakePost(): void {
    this.post.id = '5caa511d-56a0-41f9-a943-27953870e5ff';
    this.post.title = "Into would ahead way that in";
    this.post.content =
      "On for the harmonics; Do of other she up front out write by he derided back, game, his field target. Frequency; Goals used just again as distributors. Hired it are hadn't time frequency pretty lieutenantgeneral and of the scale scale, intermixing wouldn't past, at on morals, taken back our bed. Quietly might problem copy its up the like. Ideas chair. Hall steadily little the generally, in phase would letters, the a intermixing as approved in covered moment. Expected a full of found laid not are his the and doubting to eager. And a been name way to the might in.";
  }
}
