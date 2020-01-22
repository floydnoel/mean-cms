import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post'
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: Post = null;
  isLoading = true;

  constructor(private route: ActivatedRoute, private api: HomeService) { }

  ngOnInit() {
    this.api.getPost(this.route.snapshot.params.id)
      .subscribe((data: any) => {
        this.post = data;
        console.log(this.post);
        this.isLoading = false;
      });
  }

}
