import { Component } from '@angular/core';
import {Post} from "./models/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


posts : Post[]=[

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
  loveIts: 15,
  created_at: new Date()
}
]

}
