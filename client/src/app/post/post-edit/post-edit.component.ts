import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  post: Post = null;
  isLoading = true;
  fields: Array<string> = ['title', 'author', 'description', 'content', 'imageUrl'];
  postForm: FormGroup;

  constructor(private api: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.api.getPost(this.route.snapshot.params.id)
      .subscribe((data: any) => {
        this.post = data;
        // console.log(this.post);
        this.isLoading = false;
        const { title, author, description, content, imageUrl } = data
        this.postForm.setValue({
          title, author, description, content, imageUrl
        })
      }, err => {
        console.error(err);
        this.isLoading = false;
      })

      this.postForm = new FormGroup({
        title: new FormControl(),
        author: new FormControl(),
        description: new FormControl(),
        content: new FormControl(),
        imageUrl: new FormControl(),
      })
  }

  onFormSubmit() {
    this.isLoading = true;
    console.log(this.postForm.value)
    this.api.updatePost(this.route.snapshot.params.id, this.postForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoading = false;
          this.router.navigate(['/post/details/', this.route.snapshot.params.id]);
        }, (err: any) => {
          console.error(err);
          this.isLoading = false;
        });
  }

  onDeleteClick() {
    if (confirm('really delete?')) {
      this.api.deletePost(this.route.snapshot.params.id).subscribe(() => {
        console.log('deleted')
        this.router.navigate(['/']);
      }, (err: any) => {
        console.error(err);
        this.isLoading = false;
      })
    }
  }

}
