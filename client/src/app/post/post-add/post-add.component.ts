import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  post: Post = null;
  fields: Array<string> = ['title', 'author', 'description', 'content', 'imageUrl'];
  postForm: FormGroup;

  constructor(private api: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
      content: new FormControl(),
      imageUrl: new FormControl(),
    })
  }

  onFormSubmit() {
    this.api.addPost(this.postForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.router.navigate(['/post/details', id]);
        }, (err: any) => {
          console.log(err);
        });
  }

}
