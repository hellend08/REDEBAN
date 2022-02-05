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
  // @Input() stacked: boolean;

  constructor() { }

  // chartItemClicked(e: any) {
  //   console.log("🚀 ~ file: bar-chart.component.ts ~ line 17 ~ LineChartComponent ~ chartItemClicked ~ e", e)
  //   const { index, datasetIndex } = e.active[0]
  //   console.log(this.barChartData[datasetIndex].data[index])
  //   console.log(this.barChartData[datasetIndex].label)
  // }

  // public chartClicked(e: any): void {
  //   if (e.active.length > 0) {
  //   const chart = e.active[0]._chart;
  //   const activePoints = chart.getElementAtEvent(e.event);
  //     if ( activePoints.length > 0) {
  //       // get the internal index of slice in pie chart
  //       const clickedElementIndex = activePoints[0]._index;
  //       const label = chart.data.labels[clickedElementIndex];
  //       // get value by index
  //       const value = chart.data.datasets[0].data[clickedElementIndex];
  //       console.log(clickedElementIndex, label, value)
  //     }
  //    }
  //   }

  ngOnInit(): void {
  }

}
