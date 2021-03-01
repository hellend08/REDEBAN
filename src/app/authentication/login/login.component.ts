// import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public submit(){
    console.log('ready');
  }

  constructor() {
  }
  // userInfo = this.fb.group({
  //   userEmail: ['', Validators.compose([Validators.required, Validators.pattern('A-Za-z0-9')])],
  //   password:['', Validators.compose([Validators.required, Validators.pattern('A-Za-z0-9')])]
  // })

  ngOnInit(): void {
  }

}
