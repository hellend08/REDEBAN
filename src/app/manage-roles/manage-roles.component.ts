import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';




export interface PeriodicElement {
  name: string;
  description: string;
  state: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Administrador de Comercio', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'Administrador de sucursal', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1},
  {name: 'Vendedor', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'Operaciones Comercio', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'Administrador de Aplicación', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'Compensación y concialización', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'Reclamamciones', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'CAC', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'Jurídico', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
  {name: 'Producto', description: 'Lorem ipsum dorem lorum Lorem ipsum', state: 1 },
];

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.css']
})
export class ManageRolesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'state', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogDeleteComponent);
  }

  ngOnInit(): void {
  }

}
