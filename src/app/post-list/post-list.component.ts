import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at:  Date;

  constructor() { }

  ngOnInit() {
  }

  loveIt(){
   this.loveIts++;
  }
  dontLoveIt(){
    this.loveIts--;
   }
}
