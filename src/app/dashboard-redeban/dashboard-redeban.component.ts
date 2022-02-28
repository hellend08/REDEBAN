import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private parent: LayoutComponent, private router: Router) { }

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

    this.getData(this.chartType).then((resp: any) => {
      const colors = this.getColors(resp.data[0])
      const data = this.updateDataColors(resp.data, colors)
      const dataD = this.updateDataColors(resp.data, colors)

      this.barChartLabels = resp.labels
      this.barChartData = data
      this.barChartOptions = this.clientBarChartOptions

      this.doughnutChartLabels = this.clientDoughnutChartLabels
      this.doughnutChartData = this.clientDoughnutChartData
      this.doughnutChartOptions = this.clientDoughnutChartOptions

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
      data: [20, 24, 6, 12],
      backgroundColor: ['#478CCA', '#478CCA'],
      hoverBackgroundColor: ['#478CCA', '#478CCA'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
      // hoverBorderWidth: 3,
      // hoverBorderColor: 'red',
      // , '#B377C1', '#F48684', '#EF5654', '#F9B967', '#F3A239', '#F1E517', '#FEF895', '#6AA4D8', '#478CCA'],
      // hoverBackgroundColor: ['#2855B2', '#CADBFF'],
    { 
      data: [8, 4, 5, 3],
      label: 'Banco 2',
      backgroundColor: ['#6AA4D8', '#6AA4D8', '#6AA4D8', '#6AA4D8'],
      hoverBackgroundColor: ['#6AA4D8', '#6AA4D8', '#6AA4D8', '#6AA4D8'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [5, 16, 9, 5],
      label: 'Banco 3',
      backgroundColor: ['#FEF895', '#FEF895', '#FEF895', '#FEF895'],
      hoverBackgroundColor: ['#FEF895', '#FEF895', '#FEF895', '#FEF895'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [8, 8, 5, 18],
      label: 'Banco 4',
      backgroundColor: ['#F1E517', '#F1E517', '#F1E517', '#F1E517'],
      hoverBackgroundColor: ['#F1E517', '#F1E517', '#F1E517', '#F1E517'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [6, 12, 18, 7],
      label: 'Banco 5',
      backgroundColor: ['#F3A239', '#F3A239', '#F3A239', '#F3A239'],
      hoverBackgroundColor: ['#F3A239', '#F3A239', '#F3A239', '#F3A239'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [4, 9, 7, 15],
      label: 'Banco 6',
      backgroundColor: ['#F9B967', '#F9B967', '#F9B967', '#F9B967'],
      hoverBackgroundColor: ['#F9B967', '#F9B967', '#F9B967', '#F9B967'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { data: [16, 5, 10, 6],
      label: 'Banco 7',
      backgroundColor: ['#EF5654', '#EF5654', '#EF5654', '#EF5654'],
      hoverBackgroundColor: ['#EF5654', '#EF5654', '#EF5654', '#EF5654'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [8, 2, 15, 8],
      label: 'Banco 8',
      backgroundColor: ['#F48684', '#F48684', '#F48684', '#F48684'],
      hoverBackgroundColor: ['#F48684', '#F48684', '#F48684', '#F48684'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [3, 8, 5, 9],
      label: 'Banco 9',
      backgroundColor: ['#B377C1', '#B377C1', '#B377C1', '#B377C1'],
      hoverBackgroundColor: ['#B377C1', '#B377C1', '#B377C1', '#B377C1'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [20, 10, 20, 14],
      label: 'Banco 10',
      backgroundColor: ['#9756A7', '#9756A7', '#9756A7', '#9756A7'],
      hoverBackgroundColor: ['#9756A7', '#9756A7', '#9756A7', '#9756A7'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    }
  ];

  clientBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    onClick: this.chartBarClicked,
    // tooltips: {
    //   enabled: true,
    //   callbacks: {
       
    //     label: function (tooltipItem: any, data: any) {
    //       let label = data.labels[tooltipItem.index];
    //       // let label = data.datasets[tooltipItem.index];
    //       // console.log(data)
    //       // let porbad = Object.values(data.datasets)
    //       // console.log(porbad.map(function(ad: any) {
    //       //  return ad
    //       // }))
          
    //       let count: any = data
    //         .datasets[tooltipItem.datasetIndex]
    //         .data[tooltipItem.index];
    //       //return label + ": " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'pen' }).format(count);
    //       return label + ": " + count  + '%';
    //     // afterLabel: function (tooltipItem: any, data: any) {
    //     // let variableX = 'Banco 1';
    //     //   let count: any = data
    //     //     .datasets[tooltipItem.datasetIndex]
    //     //     .data[tooltipItem.index];
    //     //   return variableX + ": " + count + '%';
    //     },
    //   }
    // }
  }

  public chartBarClicked(e:any, array:any):void {
    console.log("🚀 ~ file: dashboard-redeban.component.ts ~ line 304 ~ DashboardRedebanComponent ~ chartClicked ~ array", array)
    const clickedLabel = JSON.stringify(array[0]._chart.tooltip._view.body[0].lines)
    .substring(0, 10).replace(/[\[\'\:\'\"\']+/g,'');
                         
    if (clickedLabel == 'Banco 10') {
      window.location.assign('/bank')
      // alert('Click en ' + clickedLabel)
    } else {
      alert('Click en ' + clickedLabel)
    }
  
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

    })
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  clientDoughnutChartLabels = ['Activos', 'Inactivos'];

  clientDoughnutChartData = [
    { data: [ 65, 35 ],
      labels: this.doughnutChartLabels,
      backgroundColor: ['#0033A1', '#38BCBC']},
  ]

  clientDoughnutChartOptions =
    {
      legend: { position: 'top', align: 'start', padding: {bottom: 10} },
      responsive: true,
      onClick: this.chartClicked,
      tooltips: {
        enabled: true,
        callbacks: {
          afterLabel: function (tooltipItem: any, data: any) {
          let variableX = 'Banco 1';
            let count: any = data
              .datasets[tooltipItem.datasetIndex]
              .data[tooltipItem.index];
            return variableX + ": " + count + '%';
          },
        }
      }
    }
  
    public chartClicked(e:any, array:any):void {
      console.log("🚀 ~ file: dashboard-redeban.component.ts ~ line 304 ~ DashboardRedebanComponent ~ chartClicked ~ array", array)
      
      const clickedLabel = array[0]._view.label
      alert('Click en ' + clickedLabel)
      // const valueChart = e.view.Chart.Tooltip
      // console.log(valueChart)
  
    }

}