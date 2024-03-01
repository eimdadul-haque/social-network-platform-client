import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PostModule } from '../post/post.module';
import { FormsModule } from '@angular/forms';
import { PostService } from '../post/services/post.service';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewsFeedComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    PostService,
    HttpClient
  ]
})
export class HomeModule { }
