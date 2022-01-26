import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

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
