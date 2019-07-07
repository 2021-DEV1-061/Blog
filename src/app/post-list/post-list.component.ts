import { Component, OnInit, Input } from '@angular/core';
import { PostItemService } from 'app/post-item.service';
import { Post } from 'app/models/post.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;


  constructor(private postsService: PostItemService) { }

  ngOnInit() {
    this.postSubscription= this.postsService.postsSubject.subscribe(

      (posts: Post[]) => {
        this.posts = posts;
      }

    );
    this.postsService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
  
}
