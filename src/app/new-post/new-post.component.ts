import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/post.model';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostItemService } from 'app/post-item.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup
  constructor(private postsService: PostItemService, private formBuilder: FormBuilder, private router:Router ) {}


  ngOnInit() {
   
    
    this.postForm= this.formBuilder.group({

      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: [0, Validators.required],
      created_at: [ Date(), Validators.required]
    }
    )

  }

  onSubmitFormPost() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content'],
      formValue['loveIts'],
      formValue['created_at']
    );
    this.postsService.add(newPost);
    this.router.navigate(['/posts']);
  }




}
