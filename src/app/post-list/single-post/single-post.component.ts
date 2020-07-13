import { Component, OnInit } from '@angular/core';
import { PostList } from 'src/app/models/post-list';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: PostList;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post = new PostList("","");
    const id = this.route.snapshot.params["id"];
    this.postsService.getSinglePost(+id).then(
      (post: PostList) => {
        console.log(post);
        this.post = post;
      }
    )
  }

  onBack() {
    this.router.navigate(["/posts"]);
  }

}
