import { Injectable } from '@angular/core';
import { PostList } from '../models/post-list';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //posts: PostList[] = [];
  posts: Array<PostList> = [];
  postsSubject = new Subject<PostList[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref("/blogs").set(this.posts);
  }

  getPosts() {
    firebase.database().ref("/blogs").on("value",
    (data: firebase.database.DataSnapshot) => {
      this.posts = data.val()?data.val():[];
      this.emitPosts();
    })
  }

  getSinglePost(id: number) {

    return new Promise(
      (resolve, reject) => {
        firebase.database().ref("/blogs/"+id).once("value").then(
          (data: firebase.database.DataSnapshot) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createPost(newPost: PostList) {

    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();

  }

  deletePost(post: PostList) {
    const postIndexToDelete = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToDelete, 1);
    this.savePosts();
    this.emitPosts();
  }

}
