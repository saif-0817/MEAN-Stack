import { Injectable } from '@angular/core';
import { Post } from './post.modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postsUpdated.next(this.posts);
  }

}
