import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-change-key',
  templateUrl: './change-key.component.html',
  styleUrls: ['./change-key.component.css']
})
export class ChangeKeyComponent implements OnInit {

  hide = true;

  form!: FormGroup;

  constructor(public fb:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      oldPass: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      pass: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      repeatPass: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    })
  }

  public submit(){
    console.log('Form value', this.form.value);
  }

  public enableSubmitBtn(): boolean{
    return this.form.valid;
  }

}
