import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('username and password is '+this.username+' '+this.password);
  }

  clear(): void {
    this.username = '';
    this.password = '';
  }

  onUsernameChanged(username: string): void {
    this.username = username;
  }

  onPasswordChange(password: string): void {
    this.password = password;
  }
}
