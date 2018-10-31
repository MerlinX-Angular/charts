import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit, OnDestroy {
  RadarChart: any = [];

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 300);
    }
    createChart() {
      this.RadarChart =  new Chart('radarchart', {
        type: 'radar',
        data: {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
            {
            data: [65, 40, 90, 81, 56, 55, 40],
            label: 'Bob',
            borderColor: '#ff6384',
            backgroundColor: 'rgba(255, 192, 202, 0.36)',
            },
            {
            data: [28, 30, 40, 19, 90, 27, 100],
            label: 'John',
            borderColor: '#ffa36b',
            backgroundColor: 'rgba(255, 215, 192, 0.36)'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: 'black'
            }
          },
          title: {
            display: true,
            text: 'RADAR CHART'
          }
        }
      });
    }

    ngOnDestroy() {
       this.createChart();
    }

}
