import { Component, OnInit, Input} from '@angular/core';
import { PostList } from '../models/post-list';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  postLists: Array<PostList>;
  postsSubscription: Subscription;
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (postList: PostList[]) => {

        this.postLists = postList;

      }
    );
    this.postsService. emitPosts();
  }


}
