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
  public width: any = 550;

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
          options: this.clientBarChartOptions
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
      label: 'Banco Sofitasa',
      data: [0],
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
      data: [0],
      label: 'Cassi Banco',
      backgroundColor: ['#6AA4D8', '#6AA4D8', '#6AA4D8', '#6AA4D8'],
      hoverBackgroundColor: ['#6AA4D8', '#6AA4D8', '#6AA4D8', '#6AA4D8'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'Banco Caja Social',
      backgroundColor: ['#FEF895', '#FEF895', '#FEF895', '#FEF895'],
      hoverBackgroundColor: ['#FEF895', '#FEF895', '#FEF895', '#FEF895'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'DAVIVIENDA TEST',
      backgroundColor: ['#F1E517', '#F1E517', '#F1E517', '#F1E517'],
      hoverBackgroundColor: ['#F1E517', '#F1E517', '#F1E517', '#F1E517'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'DAVIVIENDA EMI 0160',
      backgroundColor: ['#F3A239', '#F3A239', '#F3A239', '#F3A239'],
      hoverBackgroundColor: ['#F3A239', '#F3A239', '#F3A239', '#F3A239'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'Banco de Bogotá(Test)',
      backgroundColor: ['#F9B967', '#F9B967', '#F9B967', '#F9B967'],
      hoverBackgroundColor: ['#F9B967', '#F9B967', '#F9B967', '#F9B967'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { data: [0],
      label: 'Banco Caja Social (Test)',
      backgroundColor: ['#EF5654', '#EF5654', '#EF5654', '#EF5654'],
      hoverBackgroundColor: ['#EF5654', '#EF5654', '#EF5654', '#EF5654'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'BBVA Colombia (Test)',
      backgroundColor: ['#F48684', '#F48684', '#F48684', '#F48684'],
      hoverBackgroundColor: ['#F48684', '#F48684', '#F48684', '#F48684'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'SocotiaBank (Test)',
      backgroundColor: ['#B377C1', '#B377C1', '#B377C1', '#B377C1'],
      hoverBackgroundColor: ['#B377C1', '#B377C1', '#B377C1', '#B377C1'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'AV Villas(Test)',
      backgroundColor: ['#9756A7', '#9756A7', '#9756A7', '#9756A7'],
      hoverBackgroundColor: ['#9756A7', '#9756A7', '#9756A7', '#9756A7'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'Banco de Test 11',
      backgroundColor: ['#F8B4B2', '#F8B4B2', '#F8B4B2', '#F8B4B2'],
      hoverBackgroundColor: ['#F8B4B2', '#F8B4B2', '#F8B4B2', '#F8B4B2'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0],
      label: 'Banco de Prueba 12',
      backgroundColor: ['#FCCC8E', '#FCCC8E', '#FCCC8E', '#FCCC8E'],
      hoverBackgroundColor: ['#FCCC8E', '#FCCC8E', '#FCCC8E', '#FCCC8E'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0 ],
      label: 'Banco de Prueba 13',
      backgroundColor: ['#CA96D6', '#CA96D6', '#CA96D6', '#CA96D6'],
      hoverBackgroundColor: ['#CA96D6', '#CA96D6', '#CA96D6', '#CA96D6'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0, 0],
      label: 'Banco de Prueba 14',
      backgroundColor: ['#89C1F2', '#89C1F2', '#89C1F2', '#89C1F2'],
      hoverBackgroundColor: ['#89C1F2', '#89C1F2', '#89C1F2', '#89C1F2'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    },
    { 
      data: [0, 0],
      label: 'Banco de Prueba 15',
      backgroundColor: ['#85C5A5', '#85C5A5', '#85C5A5', '#85C5A5'],
      hoverBackgroundColor: ['#85C5A5', '#85C5A5', '#85C5A5', '#85C5A5'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      stack: 'a'
    }
  ];

  clientBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              callback: function(value: any, index: any, values: any) {
                // return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
                // if(parseInt(value) >= 1000){
                //   return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // } else if (parseInt(value) < -999) {
                //       return '' + Math.abs(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // } else {
                //   return '$' + value;
                // }
                if(parseInt(value) > 999){
                  return '' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              } else if (parseInt(value) < -999) {
                  return '' + Math.abs(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              } else {
                  return '' + value;
              }
              },
              beginAtZero: true,
              precision:0
          }
      }]
    },
    legend: { position: 'left'},
    onClick: this.chartBarClicked,
    // scales: {
    //   y: {
    //     ticks: {
    //       callback: function (value: any) {
    //         console.log(value)
    //         return value;
            
    //       },
    //     },
    //   },
    // },
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
    // const valueChart = e.srcElement.__ngContext__[23][0]
    // console.log(valueChart)
    // e.active[0]._index
    // const clickedLabel = array[1]._view.datasetLabel 
    // _chart.tooltip._view.body[0].lines
    // const valueChart = e.view.Chart.Tooltip
    // console.log(valueChart)

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
      // console.log("🚀 ~ file: bar-chart.component.ts ~ line 17 ~ LineChartComponent ~ chartItemClicked ~ e", e)
      // const valueChart = e.srcElement.__ngContext__[23][0]
      // console.log(valueChart)
      // e.active[0]._index
      
      const clickedLabel = array[0]._view.label
      alert('Click en ' + clickedLabel)
      // const valueChart = e.view.Chart.Tooltip
      // console.log(valueChart)
  
    }

}

   // }
      /** Imported from a question linked above. 
          Apparently Works for ChartJS V2 **/
      // datalabels: {
      //   formatter: (value : any, dnct1 : any) => {
      //     let sum = 0;
      //     let dataArr = dnct1.chart.data.datasets[0].data;
      //     dataArr.map(function(data: any){
      //       sum += Number(data);
      //     });

      //     let percentage = (value * 100 / sum).toFixed(2) + '%';
      //     return percentage;
      //   },
      //   color: '#ff3',
      // }
      
  // options: {
    // layout: {
    //   padding: {
    //     bottom: 25
    //   }
    // },
    // events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    // plugins: {
    //   tooltip: {
    //     // Tooltip will only receive click events
    //     events: ['click']
    //   }
    // },

    // tooltips: {
    //   callbacks: {
    //     title: function(tooltipItem: any, data: any) {
    //       return data['labels'][tooltipItem[0]['index']];
    //     },
    //     // label: function(tooltipItem: any, data: any) {
    //     //   return data['datasets'][0]['data'][tooltipItem['index']];
    //     // },
    //     afterLabel: function(tooltipItem: any, data: any) {
    //       var dataset = data['datasets'][0];
    //       var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]) * 100)
    //       return 'Percentage value: ' + percent + '%';
    //     }
    //   },
    // }
    // plugins: {
       // footer: (ttItem: any) => {
          //   let sum = 0;
          //   let dataArr = ttItem[0].dataset.data;
          //   dataArr.map(function(data: any) {
          //     sum += Number(data);
          //   });

          //   let percentage = (ttItem[0].parsed * 100 / sum).toFixed(2) + '%';
          //   return `Percentage of data: ${percentage}`;
          // }