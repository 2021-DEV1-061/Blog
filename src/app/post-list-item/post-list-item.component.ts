import { Component, OnInit, Input } from '@angular/core';
import { PostItemService } from 'app/post-item.service';
import { Post } from 'app/models/post.model';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at:  Date;
  @Input() index:  number;

  constructor(private postsService: PostItemService) { }

  ngOnInit() {
  }

  loveIt(){
   this.loveIts++;
   this.postsService.emitPostSubject();
  }
  dontLoveIt(){
    this.loveIts--;
    this.postsService.emitPostSubject();
   }

   SupprimerPost(post:number){

        this.postsService.deletePost(post);

   }


}
