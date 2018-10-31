import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-bar1-chart',
    templateUrl: './bar1-chart.component.html',
    styleUrls: ['./bar1-chart.component.css']
})
export class Bar1ChartComponent implements OnInit, OnDestroy {
  Bar1Chart: any = [];

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 300);
    }
    createChart() {
      this.Bar1Chart =  new Chart('bar1chart', {
        type: 'bar',
        data: {
            labels: ['Luke', 'Darth', 'Obi', 'Biggs', 'Owen', 'Leia'],
            datasets: [
                {
                    backgroundColor: 'rgb(0, 164, 209)',
                    borderColor: 'rgb(0, 164, 209)',
                    data: [172, 202, 182, 183, 178, 150],
                    label: 'Height',
                    fill: 'true'
                },
                {
                    backgroundColor: 'rgb(120, 210, 45)',
                    borderColor: 'rgb(120, 210, 45)',
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
                text: 'VERTICAL BAR CHART'
            }
        }
      });
    }

    ngOnDestroy() {
       this.createChart();
    }

}
