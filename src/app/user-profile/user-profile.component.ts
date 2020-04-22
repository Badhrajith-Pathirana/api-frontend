import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  editableMode: boolean = false;
  userData;
  title = 'User Profile';
  editFormGroup: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.initializeFormGroup();
    if (!(this.route.snapshot.paramMap.get('type') === null || this.route.snapshot.paramMap.get('type') === undefined)) {
      if (localStorage.getItem('userId') === this.route.snapshot.paramMap.get('userId')) {
        this.editableMode = true;
        this.title = 'Edit Profile';
      }
    }

    const userId = this.route.snapshot.paramMap.get('userId');

    this.userService.getUserById(userId).subscribe(userData => {
      this.userData = userData;
    });

    this.editFormGroup.patchValue(this.userData);
  }

  initializeFormGroup() {
    this.editFormGroup = new FormGroup({
      'nic': new FormControl('', [Validators.required]),
      'first_name': new FormControl('', [Validators.required]),
      'last_name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'profession': new FormControl('', [Validators.required]),
      'affiliation': new FormControl('', [Validators.required])
    });
  }

  updateUserData() {
    this.userData.nic = this.editFormGroup.get('nic').value;
    this.userData.first_name = this.editFormGroup.get('first_name').value;
    this.userData.last_name = this.editFormGroup.get('last_name').value;
    this.userData.email = this.editFormGroup.get('email').value;
    this.userData.profession = this.editFormGroup.get('profession').value;
    this.userData.affiliation = this.editFormGroup.get('affiliation').value;

    this.userService.updateUser(this.userData).subscribe(resp => {
      console.log('updated!');
      this.initializeData();
    });
  }

  clearData() {
    this.editFormGroup.reset();
  }
}
