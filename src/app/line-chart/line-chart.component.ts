import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() barChartData: any;
  @Input() barChartLabels: any;
  @Input() barChartOptions: any;
  @Input() barChartLegend: any;

  constructor() { }
  
  chartItemClicked(e: any) {
    console.log("🚀 ~ file: line-chart.component.ts ~ line 17 ~ LineChartComponent ~ chartItemClicked ~ e", e)
    // const { index, datasetIndex } = e.active[0]
    // console.log(this.barChartData[datasetIndex].data[index])
    // console.log(this.barChartData[datasetIndex].label)
  }

  ngOnInit(): void {
  }

}
