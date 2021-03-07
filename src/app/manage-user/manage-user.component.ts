import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  user: any;
  name: string;
  id: any;
  numberId: number;
  phone: number;
  email: string;
  profile: string;
  codPer: number;
  namePer: string;
  terminal: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {user: +573002443661, name: 'Pedro Antonio Zape Aguaran', id: 'C C', numberId: 80215341, phone: +573002443661, email: 'pezape@exito.com', profile: 'COMERCIO', codPer: 910355279, namePer: 'EXITO SAN ANTONIO', terminal: '003'},
  {user: 'lpaolam@bancosin.com', name: 'Lina Paola Mazuera Torres', id: 'C C', numberId: 10101258635, phone: +573002443661, email: 'lpaolam@bancosin.com', profile: 'BANCO', codPer: 10013, namePer: 'BBVA', terminal: 'N/A'},
  {user: 'ocrazo', name: 'Oscar Camilo Razo Hernandez', id: 'C C', numberId: 10101258635, phone: +573002443661, email: 'ocrazo@gmail.com', profile: 'REDEBAN', codPer: 830070527, namePer: 'REDEBAN', terminal: 'N/A'},
  
];

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements AfterViewInit {

  displayedColumns: string[] = ['user', 'name', 'id', 'numberId', 'phone', 'email', 'profile', 'codPer', 'namePer', 'terminal', 'active', 'info'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
