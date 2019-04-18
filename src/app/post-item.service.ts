import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostItemService {
  
  postsSubject = new Subject<Post[]>();

  private posts : Post[]=[

    {
      title: "Mon Premier Post",
      content: "  ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      loveIts: 5,
      created_at: new Date()
    },
    
    {
      title: "Mon deuxième Post",
      content: " sto sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      loveIts: -5,
      created_at: new Date()
    },
    
    {
      title: "Encore une Post",
      content: " Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      loveIts: 5,
      created_at: new Date()
    }
    ]

    constructor() { }

    emitPostSubject() {
      this.postsSubject.next(this.posts.slice());
    }


    deletePost(i: number) {

      this.posts.splice(i, 1);
      this.emitPostSubject();
    }

    add(post: Post){

      this.posts.push(post);
      this.emitPostSubject();
    }
  
}
