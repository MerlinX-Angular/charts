import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit, OnDestroy {
  DoughnutChart: any = [];

  constructor() { }

  ngOnInit() {
      setTimeout(() => {
          this.createChart();
      }, 300);
  }
  createChart() {
    this.DoughnutChart =  new Chart('doughnutchart', {
      type: 'doughnut',
      data: {
          labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
              datasets: [
                {
                data: [65, 40, 90, 81, 56],
                label: 'Bob',
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgba(75, 192, 192)',
                  'rgba(54, 162, 235)'
                ]
                }
              ]
      },
      options: {
        maintainAspectRatio: false, // full display
        responsive: true,
        legend: {
          labels: {
            fontColor: 'black',
          },
        },
        title: {
          display: true,
          text: 'DOUGHNUT CHART'
        }
      }
    });
  }

  ngOnDestroy() {
     this.createChart();
  }

}
