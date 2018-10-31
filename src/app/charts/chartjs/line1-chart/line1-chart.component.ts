import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-line1-chart',
  templateUrl: './line1-chart.component.html',
  styleUrls: ['./line1-chart.component.css'],
})
export class Line1ChartComponent implements OnInit, OnDestroy {
  Line1Chart: any = [];

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 300);
    }
    createChart() {
      this.Line1Chart =  new Chart('line1chart', {
        type: 'line',
        data: {
            labels: ['Luke', 'Darth', 'Obi', 'Biggs', 'Owen', 'Leia'],
            datasets: [
                {
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [172, 202, 182, 183, 178, 150],
                    label: 'Height',
                    fill: 'true'
                },
                {
                    backgroundColor: 'rgb(255, 205, 86)',
                    borderColor: 'rgb(255, 205, 86)',
                    data: [77, 136, 77, 84, 120, 49],
                    label: 'Mass',
                    fill: 'true'
                },
            ]
        },
        options: {
            legend: {
                display: true
            },
            elements: {
                line: {
                    tension: 0.000001
                }
            },
            maintainAspectRatio: false,
            plugins: {
                filler: {
                    propagate: false
                }
            },
            title: {
                display: true,
                text: 'LINE1 CHART'
            }
        }
      });
    }

    ngOnDestroy() {
       this.createChart();
    }

}
