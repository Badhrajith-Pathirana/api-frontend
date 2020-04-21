import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  categories: {id: any, value: any} [];
  postCreateForm: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.postCreateForm = new FormGroup({
      'postTitleControl': new FormControl('Title', [Validators.required]),
      'postControl': new FormControl('Vakkdkdkd', [Validators.required]),
      'postCatControl': new FormControl('' , [Validators.required])
    });
  }

}
