import { UserService } from './../services/user.service';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit {

  categories: {id:any, value:any}[];
  posts:{title: any, body: any, category: any, user: any}[];
  
  

  constructor(
    private postService : PostService,
    private userService : UserService
  ) {
    
   }

  ngOnInit() {
  }

  getCategories(){
  this.postService.getAllCategories().subscribe(cats => {
    let categoriesData: { id: any, value: any } [] = [];
    cats.forEach(cat => {
      categoriesData.push({
        id: cat.id,
        value: cat.category
      });
    });
   });
  }

  getPosts(){
  this.postService.getAllPosts().subscribe(posts=>{
    let postsData: { title: any, body: any, category: any, user: any}[] = [];
    posts.array.forEach(post => {
      postsData.push({
        title: post.title,
        body: post.body,
        category: post.category,
        user: post.user
      })
    });
  })

  }
}

