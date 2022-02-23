import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-dashboard-redeban',
  templateUrl: './dashboard-redeban.component.html',
  styleUrls: ['./dashboard-redeban.component.css']
})
export class DashboardRedebanComponent implements OnInit {

  showDelay = 700;
  loader: boolean = true;

  constructor(private parent: LayoutComponent) { }

  currentDay = false;
  chartType = 'client';

  clickToggleEvent(){
    this.parent.toggleEvent();
 }

  
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any = null;
  public barChartLabels: any = null;
  public barChartOptions: any = null;
  public height: any = 400;
  public width: any = 500;

  // public barChartType = 'bar';
  public doughnutChartLegend = true;
  public doughnutChartData: any = null;
  public doughnutChartLabels: any = null;
  public doughnutChartOptions: any = null;
  public doughnutheight: any = 200;
  public doughnutWidth: any = 400;

  // public height: any = 400;


  chartCards: any[] = [
    {id: 1, subtitle: 'Banco 1'},
    {id: 2, subtitle: 'Banco 2'},
    {id: 3, subtitle: 'Banco 3'},
    {id: 4, subtitle: 'Banco 4'},
    {id: 5, subtitle: 'Banco 5'},
    {id: 6, subtitle: 'Banco 6'},
  ]

  ngOnInit(): void {
    // this.parent.allFruits = this.chartCards.slice();
    this.getData(this.chartType).then((resp: any) => {
      const colors = this.getColors(resp.data[0])
      const data = this.updateDataColors(resp.data, colors)
      const dataD = this.updateDataColors(resp.data, colors)

      this.barChartLabels = resp.labels
      this.barChartData = data
      this.barChartOptions = resp.options

      this.doughnutChartLabels = this.clientDoughnutChartLabels
      this.doughnutChartData = this.clientDoughnutChartData
      this.doughnutChartOptions = resp.options

    })
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  currentDayChange(value: any): void {
    // Obtener con o sin día actual (value tiene el boolean en este scope)
    console.log("🚀 ~ file: charts.component.ts ~ line 71 ~ ChartsComponent ~ currentDayChange ~ value", value)
  }

  getData(chartType: any): any {
    return new Promise((res, rej) => {
      if (chartType === 'client') {
        res({
          labels: this.clientBarChartLabels,
          data: this.clientBarChartData,
          options: this.clientBarChartData
        })
      } else {
        res({
          labels: this.transactionsBarChartLabels,
          data: this.clientBarChartData,
          options: this.clientBarChartData
        })
      }
    })
  }

  getColors(data: any): any  {
    const firstColor = data.backgroundColor[0]
    const secondColor = data.backgroundColor[1]
    const firstColorHover = data.hoverBackgroundColor[0]
    const secondColorHover = data.hoverBackgroundColor[1]
    
    const backgroundColor = []
    const hoverBackgroundColor = []
    const borderColor = []

    for(let i = 0; i < data.data.length; i++) {
      backgroundColor.push(i%2 === 0 ? firstColor : secondColor)
      hoverBackgroundColor.push(i%2 === 0 ? firstColorHover : secondColorHover)
      borderColor.push(i%2 === 0 ? firstColor : secondColor)
    }

    return {
      backgroundColor,
      hoverBackgroundColor,
      borderColor
    }
  }

  updateDataColors(data: any, colors: any): any {
    const newData = JSON.parse(JSON.stringify(data))
    newData[0].backgroundColor = colors.backgroundColor
    newData[0].hoverBackgroundColor = colors.hoverBackgroundColor
    newData[0].borderColor = colors.borderColor

    return newData
  }
  


  clientBarChartLabels = ['Registrados', 'Activos', 'Inactivos', 'Retirados'];
  
  clientBarChartData: ChartDataSets[] = [
    { 
      label: 'Banco 1',
      data: [200, 240, 260, 220],
      backgroundColor: ['#478CCA', '#478CCA'],
      hoverBackgroundColor: ['#478CCA', '#478CCA'],
      borderColor: ['#00339F', '#86AAF6'],
      stack: 'a'
    },
      // hoverBorderWidth: 3,
      // hoverBorderColor: 'red',
      // , '#B377C1', '#F48684', '#EF5654', '#F9B967', '#F3A239', '#F1E517', '#FEF895', '#6AA4D8', '#478CCA'],
      // hoverBackgroundColor: ['#2855B2', '#CADBFF'],
    { 
      data: [108, 115, 110, 100],
      label: 'Banco 2',
      backgroundColor: ['#6AA4D8', '#6AA4D8', '#6AA4D8', '#6AA4D8'],
      hoverBackgroundColor: ['#6AA4D8', '#6AA4D8', '#6AA4D8', '#6AA4D8'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { 
      data: [28, 48, 40, 19],
      label: 'Banco 3',
      backgroundColor: ['#FEF895', '#FEF895', '#FEF895', '#FEF895'],
      hoverBackgroundColor: ['#FEF895', '#FEF895', '#FEF895', '#FEF895'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { 
      data: [48, 28, 40, 19],
      label: 'Banco 4',
      backgroundColor: ['#F1E517', '#F1E517', '#F1E517', '#F1E517'],
      hoverBackgroundColor: ['#F1E517', '#F1E517', '#F1E517', '#F1E517'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { 
      data: [28, 48, 40, 19],
      label: 'Banco 5',
      backgroundColor: ['#F3A239', '#F3A239', '#F3A239', '#F3A239'],
      hoverBackgroundColor: ['#F3A239', '#F3A239', '#F3A239', '#F3A239'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { 
      data: [48, 28, 40, 19],
      label: 'Banco 6',
      backgroundColor: ['#F9B967', '#F9B967', '#F9B967', '#F9B967'],
      hoverBackgroundColor: ['#F9B967', '#F9B967', '#F9B967', '#F9B967'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { data: [28, 48, 40, 19],
      label: 'Banco 7',
      backgroundColor: ['#EF5654', '#EF5654', '#EF5654', '#EF5654'],
      hoverBackgroundColor: ['#EF5654', '#EF5654', '#EF5654', '#EF5654'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { 
      data: [38, 28, 40, 19],
      label: 'Banco 8',
      backgroundColor: ['#F48684', '#F48684', '#F48684', '#F48684'],
      hoverBackgroundColor: ['#F48684', '#F48684', '#F48684', '#F48684'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { 
      data: [28, 48, 40, 19],
      label: 'Banco 9',
      backgroundColor: ['#B377C1', '#B377C1', '#B377C1', '#B377C1'],
      hoverBackgroundColor: ['#B377C1', '#B377C1', '#B377C1', '#B377C1'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    },
    { 
      data: [208, 100, 50, 280],
      label: 'Banco 10',
      backgroundColor: ['#9756A7', '#9756A7', '#9756A7', '#9756A7'],
      hoverBackgroundColor: ['#9756A7', '#9756A7', '#9756A7', '#9756A7'],
      borderColor: ['#6AA4D8', '#6AA4D8'],
      stack: 'a'
    }
  ];

  clientBarChartOptions = {
    // onClick: this.chartItemClicked,
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

  transactionsBarChartLabels = ['Valor Tx', 'Cantidad Tx'];

  chartTypeChange(type: any): void {
    // this.loader = true;
    this.chartType = type.value

    this.getData(this.chartType).then((resp: any) => {
      const colors = this.getColors(resp.data[0])
      const data = this.updateDataColors(resp.data, colors)
      const dataD = this.updateDataColors(resp.data, colors)


      this.barChartLabels = resp.labels
      this.barChartData = data
      this.barChartOptions = resp.options

      // this.doughnutChartLabels = resp.labels
      // this.doughnutChartData = dataD
      // this.doughnutChartOptions = resp.options

    })
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  clientDoughnutChartLabels = ['Activos', 'Inactivos'];

  clientDoughnutChartData = [
    // { 
      { data: [ 550, 450 ],
        labels: this.doughnutChartLabels,
        backgroundColor: ['#0033A1', '#38BCBC']},
    // },
  ]


}
