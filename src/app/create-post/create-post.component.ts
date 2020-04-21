import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  categories: { id: any, value: any } [];
  postCreateForm: FormGroup;

  constructor(
    private postService: PostService
  ) {

  }

  ngOnInit() {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.postService.getAllCategories().subscribe(cats => {
      let categoriesData: { id: any, value: any } [] = [];
      cats.forEach(cat => {
        categoriesData.push({
          id: cat.id,
          value: cat.category
        });
      });
    });

    this.postCreateForm = new FormGroup({
      'postTitleControl': new FormControl('', [Validators.required]),
      'postControl': new FormControl('', [Validators.required]),
      'postCatControl': new FormControl('', [Validators.required])
    });
  }

  createPost() {
    let postData = {
      post_title: this.postCreateForm.get('postTitleControl').value,
      post_body: this.postCreateForm.get('postControl').value,
      posted_user: localStorage.getItem('user_id'),
      category_id: this.postCreateForm.get('postCatControl').value
    };

    this.postService.createPost(postData).subscribe(value => {
    });
  }

  clearData() {
    this.postCreateForm.reset();
  }
}
