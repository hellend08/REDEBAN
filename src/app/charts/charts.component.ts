import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  constructor() { }

  chartType = 'amount';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = [
    '8 ene.',
    '9 ene.',
    '10 ene.',
    '11 ene.',
    '12 ene.',
    '13 ene.',
    '14 ene.',
    '15 ene.',
    '16 ene.',
    '17 ene.',
    '18 ene.',
    '19 ene.',
    '20 ene.',
    '21 ene.',
    '22 ene.',
    '23 ene.',
    '24 ene.',
    '25 ene.',
    '26 ene.',
    '27 ene.',
    '28 ene.',
    '29 ene.',
    '30 ene.',
    '31 ene.',
    '1 feb.',
    '2 feb.',
    '3 feb.',
    '4 feb.',
    '5 feb.',
    '6 feb.',
  ];

  public barChartType = 'bar';

  public barChartLegend = false;
  
  public barChartData = [
    {
      label: 'Cantidad',
      data: [
        480,
        570,
        380,
        480,
        260,
        480,
        570,
        380,
        480,
        260,
        480,
        570,
        380,
        480,
        260,
        480,
        570,
        380,
        480,
        260,
        480,
        570,
        380,
        480,
        260,
        480,
        570,
        380,
        480,
        260,
      ],
      backgroundColor: ['#00339F', '#86AAF6'],
      hoverBackgroundColor: ['#2855B2', '#CADBFF'],
      borderColor: ['#00339F', '#86AAF6']
    },
  ];

  ngOnInit(): void {
  }

}
