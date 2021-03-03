import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  headerLight: boolean = false;


  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.headerLight = 'url' in val && val.url === '/';
    })
  }

  ngOnInit(): void {
  }

}
