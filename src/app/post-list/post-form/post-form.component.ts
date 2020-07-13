import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { PostList } from '../../models/post-list';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  formBlog: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
   return this.formBlog = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required],

    });
  }

  onSave() {

    const title = this.formBlog.get("title").value;
    const content = this.formBlog.get("content").value;
    console.log("");
    const newPost = new PostList(title, content);

    this.postsService.createPost(newPost);
    this.router.navigate(["/posts"]);
  }

}
