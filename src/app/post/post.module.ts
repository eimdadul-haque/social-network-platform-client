import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { PostService } from './services/post.service';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[
    PostService
  ]
})
export class PostModule { }
