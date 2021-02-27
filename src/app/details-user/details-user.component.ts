import { Component, OnInit } from '@angular/core';

interface User {
  value: string;
  viewValue: string;
}

interface Profile {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
