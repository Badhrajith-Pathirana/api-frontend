import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-program-manage',
  templateUrl: './program-manage.component.html',
  styleUrls: ['./program-manage.component.css']
})
export class ProgramManageComponent implements OnInit {

  category : any;
  users: {}[];
  searchUserForm: FormControl;
  

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.initializeFormGroup();
  }
  initializeFormGroup(){
    this.userService.getAllUsers().subscribe(users => {
      let usersData: { id: any, name: any, email:any } [] = [];
      users.forEach(user => {
        usersData.push({
          id: user.id,
          name: user.name,
          email: user.email
        });
      });
     });
    }

    getUserByCategory(){
      this.userService.getAllUsers().subscribe(users=>{
        let usersData: { id: any, name: any, email: any, category: any}[] = [];
        users.array.forEach(user => {
          if (this.searchUserForm.get('postCatControl').value==user.category){
            usersData.push({
              id: user.id,
              name: user.name,
              email: user.email,
              category: user.category
            })
          }
        });
      })
      
     }

}
