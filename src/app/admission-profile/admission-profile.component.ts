import { Component, OnInit } from '@angular/core';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admission-profile',
  templateUrl: './admission-profile.component.html',
  styleUrls: ['./admission-profile.component.css']
})
export class AdmissionProfileComponent implements OnInit {

  users: User[] = [
    {value: 'user-0', viewValue: '910203040-VARIEDADES SENSACIÓN'},
    {value: 'user-1', viewValue: '910502030-EL COMERCIO DE SIEMPRE'},
    {value: 'user-2', viewValue: '914587925-MI EMPRENDIMIENTO.COM'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
