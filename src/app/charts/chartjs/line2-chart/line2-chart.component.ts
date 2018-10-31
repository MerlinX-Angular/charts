import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-line2-chart',
  templateUrl: './line2-chart.component.html',
  styleUrls: ['./line2-chart.component.css']
})
export class Line2ChartComponent implements OnInit, OnDestroy {
  Line2Chart: any = [];

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 400);
    }
    createChart() {
      this.Line2Chart =  new Chart('line2chart', {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Car',
              data: [85, 79, 38, 62, 78, 95],
              borderColor: '#ba7fec',
              backgroundColor: '#ba7fec',
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            }, {
              label: 'Bus',
              data: [25, 73, 48, 42, 39, 34],
              borderColor: '#5dcfe3',
              backgroundColor: '#5dcfe3',
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            }, {
              label: 'Metro',
              data: [41, 55, 22, 85, 69, 84],
              borderColor: '#73a1ff',
              backgroundColor: '#73a1ff',
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            }, {
              label: 'Taxi',
              data: [55, 33, 44, 66, 54, 69],
              borderColor: '#ff8195',
              backgroundColor: '#ff8195',
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top',
            labels: {
              fontColor: 'black',
            },
          },
          title: {
            display: true,
            text: 'LINE2 CHART'
          },
          hover: {
            mode: 'index',
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Month',
                },
                gridLines: {
                  display: true,
                  color: '#e3e3e3',
                },
                ticks: {
                  max: 100,
                  min: 0,
                  fontColor: 'black',
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Value'
                },
                gridLines: {
                  display: true,
                  color: '#e3e3e3'
                },
                ticks: {
                  max: 100,
                  min: 0,
                  fontColor: 'black'
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
