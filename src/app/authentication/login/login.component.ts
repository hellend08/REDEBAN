import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    })
  }

  public submit(){
    console.log('Form value', this.form.value);
  }

  public enableSubmitBtn(): boolean{
    return this.form.valid;
  }
}
