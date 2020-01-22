import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post'
import { HomeService } from '../home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  isLoading = true;

  constructor(private api: HomeService) { }
  // constructor() { }

  ngOnInit() {
    this.api.getPosts().subscribe((res: any) => {
      // console.log(res)
      this.posts = res;
      this.isLoading = false;
    }, err => {
      console.error(err)
      this.isLoading = false
    })
  }

}
