import { CommonModule } from '@angular/common';
import { Component, Input, OnInit,  OnDestroy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.modal';
import { PostsService } from '../posts.service';
import  { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports: [MatExpansionModule, CommonModule, MatButtonModule]
})
export class PostListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  posts: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.subscription = this.postsService.getPostUpdateListner().subscribe((posts: Post[]) => {
      this.posts = posts
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
