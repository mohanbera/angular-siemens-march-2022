import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string = '';
  password: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  signup(): void {
    console.log('Username, password and email is '+this.username+' '+this.password+' '+this.email);
  }

  clear(): void {
    this.username = '';
    this.password = '';
    this.email = '';
  }
}
