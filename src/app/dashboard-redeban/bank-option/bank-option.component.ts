import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-option',
  templateUrl: './bank-option.component.html',
  styleUrls: ['./bank-option.component.css']
})
export class BankOptionComponent implements OnInit {

  showDelay = 700;
  topCards!: boolean;
  loader: boolean = true;

  constructor() { }

  currentDay = false;
  chartType = 'amount';

  ngOnInit(): void {
    this.lineChartLabels = this.registryLineChartLabels
      this.lineChartData = this.registryLineChartData
      this.lineChartOptions = this.registryLineChartOptions
  }

  public lineChartType = 'line';
  public lineChartLegend = false;
  public lineChartData: any = null;
  public lineChartLabels: any = null;
  public lineChartOptions: any = null;

  registryLineChartLabels = ['10 ene.', '11 ene.', '12 ene.', '13 ene.', '14 ene.', '15 ene.', '16 ene.', '17 ene.', '18 ene.', '19 ene.', '20 ene.', '21 ene.', '22 ene.', '23 ene.', '24 ene.', '25 ene.', '26 ene.', '27 ene.', '28 ene.', '29 ene.', '30 ene.', '31 ene.', '1 feb.', '2 feb.', '3 feb.', '4 feb.', '5 feb.', '6 feb.'];
  
  registryLineChartData = [
    {
      fill: false,
      label: 'Registros',
      data: [50, 100, 120, 100, 105, 200, 100, 75, 12, 300, 250, 150, 180, 200, 250, 270, 225, 150, 130, 80, 30, 12, 75, 180, 130, 195, 75, 30, 12],
      backgroundColor: '#00339F',
      pointBackgroundColor: '#00339F',
      pointBorderColor: '#00339F',
      pointHoverBackgroundColor: '#00339F',
      pointHoverBorderColor: '#00339F',
      borderColor: '#00339F'
    },
  ];

  registryLineChartOptions = {
    // scaleShowVerticalLines: false,
    responsive: true,
    elements: {
      line: {
          tension: 0
      }
    },
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return value;
          },
        },
      },
    },
  }

}
