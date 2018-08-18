import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {UserService} from '../service/user.service';
import {TokenStorage} from '../service/token.storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage,
              private userService: UserService) {
  }

  username: string;
  password: string;
  grandType: string;

  login(): void {
    this.username = 'admin.admin';
    this.password = 'jwtpass';
    this.grandType = 'password';
    const body = {username: this.username, password: this.password, grant_type : this.grandType};
    this.authService.attemptAuth(body).subscribe(
      data => {
        this.token.saveToken(data.access_token);
        this.token.saveTokenBearer(data.token_type);
        this.router.navigate(['user']);
      }
    );
  }
  hello(): void {
    this.userService.helloWorld().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
