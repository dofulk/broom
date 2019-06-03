import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { UserService } from '../../services/user.service'


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: RouterExtensions,

  ) { }

  ngOnInit() {
  }

  join(username) {
    this.userService.user = username
    this.router.navigate(['../home'])
  }

}
