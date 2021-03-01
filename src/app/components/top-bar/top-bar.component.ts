import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  showBackBtn: boolean = true;

  constructor(private router: Router) {
    // router.events.subscribe((val) => {
    //   if (val instanceof NavigationEnd) {
    //     this.showBackBtn = val.url === '/login';
    //   }
    // });
  
   }

  ngOnInit(): void {
  }

}
