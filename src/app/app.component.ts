import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'api-frontend';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //this.routeTheLogin();
  }

  routeTheLogin() {
    const user_type = localStorage.getItem('user-type');

    if (user_type !== null && user_type  !== undefined) {
      switch (user_type) {
        case 'EXPERT':
          // Expert router adds here
          break;
        case 'STUDENT':
      //    Student router adds here
          break;
        case 'PROGRAM_MANAGER':
      //    pm router here
          break;
      }
    } else {
      this.router.navigate(['create-post']);
    }
  }

}
