import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit, OnDestroy {
  ScatterChart: any = [];

  constructor() { }

  ngOnInit() {
      setTimeout(() => {
          this.createChart();
      }, 300);
  }
  createChart() {
    this.ScatterChart =  new Chart('scatterchart', {
      type: 'scatter',
      data: {
          datasets: [
            {
            label: 'First dataset',
            xAxisID: 'x-axis-1',
            yAxisID: 'y-axis-1',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
              { x: 20, y: 25 },
              { x: 5, y: 7 },
              { x: -20, y: -25 },
              { x: -12, y: -18 },
              { x: 10, y: -10 }
            ],
            pointRadius: 5,
            fill: 'true'
            },
            {
            label: 'Second dataset',
            xAxisID: 'x-axis-1',
            yAxisID: 'y-axis-2',
            backgroundColor: 'rgb(120, 210, 45)',
            borderColor: 'rgb(120, 210, 45)',
            data: [
              { x: 30, y: 20 },
              { x: 15, y: 15 },
              { x: -15, y: 10 },
              { x: -5, y: -15 }
            ],
            pointRadius: 5,
            fill: 'true'
            }
          ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
        display: true,
        text: 'Scatter Chart - Multi Axis'
        },
        scales: {
          xAxes: [
            {
            ticks:
              {
              min: -40,
              max: 40,
              padding: 1
              },
            display: true,
            type: 'linear',
            position: 'bottom',
            gridLines: {
              zeroLineColor: 'rgba(0, 0, 0, 1)'
            }
            }
          ],
          yAxes: [
            { ticks:
              {
              min: -40,
              max: 40,
              padding: 1
              },
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            },
            { ticks:
              {
              min: -40,
              max: 40,
              padding: 1
              },
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              drawOnChartArea: false
            }
            }
          ]
        }
      }
    });
  }

  ngOnDestroy() {
     this.createChart();
  }

}
