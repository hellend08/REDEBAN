import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  headerLight: boolean = false;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  bankCtrl = new FormControl();
  filteredBanks: Observable<string[]>;
  banks: string[] = ['Banco 1'];
  allBanks: string[] = ['Banco 1', 'Banco 2', 'Banco 3', 'Banco 4', 'Banco 5'];
  // showFiller: any;

  @ViewChild('drawer', {static: true}) drawer: any;

  @ViewChild('bankInput') bankInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  toggleEvent(){
    this.drawer.toggle();
 }

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.headerLight = 'url' in val && val.url === '/';
    })

    this.filteredBanks = this.bankCtrl.valueChanges.pipe(
      startWith(null),
      map((bank: string | null) => bank ? this._filter(bank) : this.allBanks.slice()));
  }

  ngOnInit(): void {
    // console.log(this.showFiller)
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.banks.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.bankCtrl.setValue(null);
  }

  remove(bank: string): void {
    const index = this.banks.indexOf(bank);

    if (index >= 0) {
      this.banks.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.banks.push(event.option.viewValue);
    this.bankInput.nativeElement.value = '';
    this.bankCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allBanks.filter(bank => bank.toLowerCase().indexOf(filterValue) === 0);
  }

}
