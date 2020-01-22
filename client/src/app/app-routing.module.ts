import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', data: {title: 'HomeComponent'}, component: HomeComponent},
  { path: 'category/:id', data: {title: 'Posts by category'}, component: CategoryComponent},
  { path: 'categories', data: {title: 'CategoriesComponent'}, component: CategoriesComponent},
  { path: 'posts', data: {title: 'PostsComponent'}, component: PostsComponent},
  { path: 'post/add', data: {title: 'PostAddComponent'}, component: PostAddComponent},
  { path: 'post/edit/:id', data: {title: 'PostEditComponent'}, component: PostEditComponent},
  { path: 'post/:id', data: {title: 'PostComponent'}, component: PostComponent},
  { path: 'post/details/:id', data: {title: 'PostDetailsComponent'}, component: PostDetailsComponent},
  { path: 'category/edit/:id', data: {title: 'CategoryEditComponent'}, component: CategoryEditComponent},
  { path: 'category/add', data: {title: 'CategoryAddComponent'}, component: CategoryAddComponent},
  { path: 'category/details/:id', data: {title: 'CategoryDetailsComponent'}, component: CategoryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
