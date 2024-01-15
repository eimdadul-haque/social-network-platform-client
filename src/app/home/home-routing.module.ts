import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { NewsFeedComponent } from "./news-feed/news-feed.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: NewsFeedComponent
  }
  ,
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}