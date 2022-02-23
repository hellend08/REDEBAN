import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-banco',
  templateUrl: './dashboard-banco.component.html',
  styleUrls: ['./dashboard-banco.component.css']
})
export class DashboardBancoComponent implements OnInit {

  showDelay = 700;
  topCards!: boolean;
  loader: boolean = true;

  constructor() { }

  currentDay = false;
  chartType = 'amount';

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

  activeLineChartLabels = ['10 ene.', '11 ene.', '12 ene.', '13 ene.', '14 ene.', '15 ene.', '16 ene.', '17 ene.', '18 ene.', '19 ene.', '20 ene.', '21 ene.', '22 ene.', '23 ene.', '24 ene.', '25 ene.', '26 ene.', '27 ene.', '28 ene.', '29 ene.', '30 ene.', '31 ene.', '1 feb.', '2 feb.', '3 feb.', '4 feb.', '5 feb.', '6 feb.'];
  
  activeLineChartData = [
    {
      fill: false,
      label: 'Transacciones',
      data: [50, 100, 120, 100, 105, 200, 100, 75, 12, 300, 250, 150, 180, 200, 250, 270, 225, 150, 130, 80, 30, 12, 75, 180, 130, 195, 75, 30, 12],
      backgroundColor: '#00339F',
      pointBackgroundColor: '#00339F',
      pointBorderColor: '#00339F',
      pointHoverBackgroundColor: '#00339F',
      pointHoverBorderColor: '#00339F',
      borderColor: '#00339F'
    },
  ];

  activeLineChartOptions = {
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

  inactiveLineChartLabels = ['10 ene.', '11 ene.', '12 ene.', '13 ene.', '14 ene.', '15 ene.', '16 ene.', '17 ene.', '18 ene.', '19 ene.', '20 ene.', '21 ene.', '22 ene.', '23 ene.', '24 ene.', '25 ene.', '26 ene.', '27 ene.', '28 ene.', '29 ene.', '30 ene.', '31 ene.', '1 feb.', '2 feb.', '3 feb.', '4 feb.', '5 feb.', '6 feb.'];
  
  inactiveLineChartData = [
    {
      fill: false,
      label: 'Transacciones',
      data: [245, 250, 200, 186, 198, 150, 200, 220, 270, 100, 125, 170, 175, 140, 120, 110, 130, 170, 180, 215, 240, 245, 220, 155, 180, 170, 190, 240, 200, 0],
      backgroundColor: '#FF8019',
      pointBackgroundColor: '#FF8019',
      pointBorderColor: '#FF8019',
      pointHoverBackgroundColor: '#FF8019',
      pointHoverBorderColor: '#FF8019',
      borderColor: '#FF8019'
    },
  ];

  inactiveLineChartOptions = {
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

  retirementLineChartLabels = ['10 ene.', '11 ene.', '12 ene.', '13 ene.', '14 ene.', '15 ene.', '16 ene.', '17 ene.', '18 ene.', '19 ene.', '20 ene.', '21 ene.', '22 ene.', '23 ene.', '24 ene.', '25 ene.', '26 ene.', '27 ene.', '28 ene.', '29 ene.', '30 ene.', '31 ene.', '1 feb.', '2 feb.', '3 feb.', '4 feb.', '5 feb.', '6 feb.'];
  
  retirementLineChartData = [
    {
      fill: false,
      label: 'Transacciones',
      data: [100, 90, 75, 70, 75, 70, 50, 80, 85, 100, 20, 40, 60, 65, 50, 40, 30, 45, 60, 70, 80, 100, 102, 80, 53, 70, 60, 80, 98, 100, 75, 300],
      backgroundColor: '#64DFDF',
      pointBackgroundColor: '#64DFDF',
      pointBorderColor: '#64DFDF',
      pointHoverBackgroundColor: '#64DFDF',
      pointHoverBorderColor: '#64DFDF',
      borderColor: '#64DFDF'
    },
  ];

  retirementLineChartOptions = {
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

  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData: any = null;
  public barChartLabels: any = null;
  public barChartOptions: any = null;
  public height: any = 400;

  amountBarChartLabels = ['8 ene.', '9 ene.', '10 ene.', '11 ene.', '12 ene.', '13 ene.', '14 ene.', '15 ene.', '16 ene.', '17 ene.', '18 ene.', '19 ene.', '20 ene.', '21 ene.', '22 ene.', '23 ene.', '24 ene.', '25 ene.', '26 ene.', '27 ene.', '28 ene.', '29 ene.', '30 ene.', '31 ene.', '1 feb.', '2 feb.', '3 feb.', '4 feb.', '5 feb.', '6 feb.'];
  
  amountBarChartData = [
    {
      label: 'Cantidad',
      data: [480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260, 480, 570, 380, 480, 260],
      backgroundColor: ['#FFC697', '#FE502F'],
      hoverBackgroundColor: ['#FFDEC3', '#FD765B'],
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
      backgroundColor: ['#FFC697', '#FE502F'],
      hoverBackgroundColor: ['#FFDEC3', '#FD765B'],
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
      const colors = this.getColors(resp.data[0])
      const data = this.updateDataColors(resp.data, colors)

      this.barChartLabels = resp.labels
      this.barChartData = data
      this.barChartOptions = resp.options

    })

    this.topCards = true

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
      } else if (chartType === 'quantity') {
        res({
          labels: this.quantityBarChartLabels,
          data: this.quantityBarChartData,
          options: this.quantityBarChartOptions
        })
      } else if (chartType === 'registry') {
        res({
          labels: this.registryLineChartLabels,
          data: this.registryLineChartData,
          options: this.registryLineChartOptions
        })
      } else if (chartType === 'active') {
        res({
          labels: this.activeLineChartLabels,
          data: this.activeLineChartData,
          options: this.activeLineChartOptions
        })
      } else if (chartType === 'inactive') {
        res({
          labels: this.inactiveLineChartLabels,
          data: this.inactiveLineChartData,
          options: this.inactiveLineChartOptions
        })
      } else if (chartType === 'retirement') {
        res({
          labels: this.retirementLineChartLabels,
          data: this.retirementLineChartData,
          options: this.retirementLineChartOptions
        })
      }
    })
  }

  currentDayChange(value: any): void {
    // Obtener con o sin día actual (value tiene el boolean en este scope)
    console.log("🚀 ~ file: charts.component.ts ~ line 71 ~ ChartsComponent ~ currentDayChange ~ value", value)
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

  chartTypeChange(type: any): void {
    this.loader = true;
    this.chartType = type.value
    this.topCards;

    this.getData(this.chartType).then((resp: any) => {
      let data = null

      if (this.chartType === 'amount' || this.chartType === 'quantity') {
        const colors = this.getColors(resp.data[0])
        data = this.updateDataColors(resp.data, colors)
      } else {
        data = resp.data
      }

      this.barChartLabels = resp.labels
      this.barChartData = data
      this.barChartOptions = resp.options

      this.lineChartLabels = resp.labels
      this.lineChartData = data
      this.lineChartOptions = resp.options
     
    })

    if (this.chartType === 'amount') {
      this.topCards = true;
    } else if (this.chartType === 'quantity') {
      this.topCards = true;
    } else {
      this.topCards = false;
    }
    
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

}
