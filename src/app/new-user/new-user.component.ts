import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'


interface User {
  value: string;
  viewValue: string;
}

interface Profile {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  profiles: Profile[] = [
    {value: 'profile-0', viewValue: 'REDEBAN'},
    {value: 'profile-1', viewValue: 'BANCO'},
    {value: 'profile-2', viewValue: 'COMERCIO'}
  ];

  users: User[] = [
    {value: 'user-0', viewValue: '910203040-VARIEDADES SENSACIÓN'},
    {value: 'user-1', viewValue: '910502030-EL COMERCIO DE SIEMPRE'},
    {value: 'user-2', viewValue: '914587925-MI EMPRENDIMIENTO.COM'}
  ];

  form!: FormGroup;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: [ '', [Validators.compose([Validators.required, Validators.pattern('[A -Za-z0-9]*')]), Validators.minLength(2)]],
      number: [ '', [Validators.compose([Validators.required, Validators.pattern('[0-9]*')]), Validators.minLength(10)]],
      phone: [ '', [Validators.compose([Validators.required, Validators.pattern('[0-9]*')]), Validators.minLength(10)]],
      
    })
  }

  public submit(){
    console.log('Form value', this.form.value);
  }

  public enableSubmitBtn(): boolean{
    return this.form.valid;
  }
}
