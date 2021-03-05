import {Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';


export interface PeriodicElement {
  
  profile: string;
  keyMin: number;
  keyMax: number;
  mayus: number;
  minus: number;
  number: number;
  specials: number;
  repeated: number;
  listBlack: string;
  lastPass: number;
  validity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {profile: 'Redeban', keyMin: 8, keyMax: 20, mayus: 1,  minus: 1, number: 1, specials: 1, repeated: 1, listBlack: 'MiComercio01, Qwerty 123, 12345678', lastPass: 1, validity: 365 },
  {profile: 'Comercio', keyMin: 8, keyMax: 20, mayus: 1,  minus: 1, number: 1, specials: 1, repeated: 1, listBlack: 'MiComercio01, Qwerty 123, 12345678',lastPass: 1, validity: 90 },
  {profile: 'Banco', keyMin: 0, keyMax: 0, mayus: 0,  minus: 0, number: 0, specials: 0, repeated: 1, listBlack: 'null',lastPass: 1, validity: 0  },
];

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
  displayedColumns: string[] = ['profile', 'keyMin', 'keyMax', 'mayus', 'minus', 'number', 'specials', 'repeated', 'listBlack', 'lastPass', 'validity', 'start' ];
  dataSource = ELEMENT_DATA;
  
  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogDeleteComponent);
  }

  ngOnInit(): void {
  }

}
