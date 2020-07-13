import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostList } from 'src/app/models/post-list';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.sass']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  @Input() post;
  @Input() i;
  posts: PostList[];
  postsSubscription: Subscription;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: PostList[]) => {
        this.posts = posts;
      }
    )
  }

  onDelete(post: PostList) {
    this.postsService.deletePost(post);

  }

  onView(id: number) {

    //this.router.navigate(["/post/view/"+id]);
    this.router.navigate(["/post","view", id]);

  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
