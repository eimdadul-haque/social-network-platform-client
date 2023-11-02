import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { BlogListComponent } from "./blog-list/blog-list.component";


const routes: Routes = [
  {
    path: 'list',
    component: BlogListComponent
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
export class BlogRoutingModule {}