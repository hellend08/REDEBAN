import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input() doughnutChartData: any;
  @Input() doughnutChartLabels: any;
  @Input() doughnutChartOptions: any;
  @Input() doughnutChartLegend: any;
  @Input() height: any;
  @Input() width: any;

  constructor() { }

  ngOnInit(): void {
  }

}
