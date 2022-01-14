import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  loader: boolean = true;

  currentDay = false;
  chartType = 'amount';

  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData: any = null;
  public barChartLabels: any = null;
  public barChartOptions: any = null;

  amountBarChartLabels = ['8 ene.', '9 ene.', '10 ene.', '11 ene.', '12 ene.', '13 ene.', '14 ene.', '15 ene.', '16 ene.', '17 ene.', '18 ene.', '19 ene.', '20 ene.', '21 ene.', '22 ene.', '23 ene.', '24 ene.', '25 ene.', '26 ene.', '27 ene.', '28 ene.', '29 ene.', '30 ene.', '31 ene.', '1 feb.', '2 feb.', '3 feb.', '4 feb.', '5 feb.', '6 feb.'];
  
  amountBarChartData = [
    {
      label: 'Cantidad',
      data: [480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260],
      backgroundColor: ['#00339F', '#86AAF6'],
      hoverBackgroundColor: ['#2855B2', '#CADBFF'],
      borderColor: ['#00339F', '#86AAF6']
    },
  ];

  amountBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
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

  quantityBarChartLabels = ['8 ene.', '9 ene.', '10 ene.', '11 ene.', '12 ene.', '13 ene.', '14 ene.', '15 ene.', '16 ene.', '17 ene.', '18 ene.', '19 ene.', '20 ene.', '21 ene.', '22 ene.', '23 ene.', '24 ene.', '25 ene.', '26 ene.', '27 ene.', '28 ene.', '29 ene.', '30 ene.', '31 ene.', '1 feb.', '2 feb.', '3 feb.', '4 feb.', '5 feb.', '6 feb.'];
  
  quantityBarChartData = [
    {
      label: 'Cantidad',
      data: [380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570],
      backgroundColor: ['#00339F', '#86AAF6'],
      hoverBackgroundColor: ['#2855B2', '#CADBFF'],
      borderColor: ['#00339F', '#86AAF6']
    },
  ];

  quantityBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return value + 'M';
          },
        },
      },
    },
  }

  ngOnInit(): void {
    this.getData(this.chartType).then((resp: any) => {
      this.barChartLabels = resp.labels
      this.barChartData = resp.data
      this.barChartOptions = resp.options
    })

    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  getData(chartType: any): any {
    return new Promise((res, rej) => {
      if (chartType === 'amount') {
        res({
          labels: this.amountBarChartLabels,
          data: this.amountBarChartData,
          options: this.amountBarChartOptions
        })
      } else {
        res({
          labels: this.quantityBarChartLabels,
          data: this.quantityBarChartData,
          options: this.quantityBarChartOptions
        })
      }
    })
  }

  currentDayChange(value: any): void {
    // Obtener con o sin día actual (value tiene el boolean en este scope)
    console.log("🚀 ~ file: charts.component.ts ~ line 71 ~ ChartsComponent ~ currentDayChange ~ value", value)
  }

  chartTypeChange(type: any): void {
    this.loader = true;
    this.chartType = type.value

    this.getData(this.chartType).then((resp: any) => {
      this.barChartLabels = resp.labels
      this.barChartData = resp.data
      this.barChartOptions = resp.options
     
    })
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
}
