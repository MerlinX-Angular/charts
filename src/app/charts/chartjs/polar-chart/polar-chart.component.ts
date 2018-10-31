import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit, OnDestroy {
  PolarChart: any = [];

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 300);
    }
    createChart() {
      this.PolarChart =  new Chart('polarchart', {
        type: 'polarArea',
        data: {
            labels: ['Eating', 'Sleeping', 'Coding', 'Cycling', 'Running'],
                datasets: [
                  {
                  data: [65, 40, 88, 81, 56],
                  label: 'Bob',
                  borderColor: [
                    '#5dcfe3',
                    '#aa9539',
                    '#19d416',
                    '#cd38e4',
                    '#fa97ab'
                  ],
                  backgroundColor: [
                    'rgba(93, 207, 227, 0.36)',
                    'rgba(170, 149, 57, 0.36)',
                    'rgba(25, 212, 22, 0.36)',
                    'rgba(205, 56, 228, 0.36)',
                    'rgba(255, 177, 193, 0.36)'
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
            display: false,
            text: 'POLAR AREA CHART'
          }
        }
      });
    }

    ngOnDestroy() {
       this.createChart();
    }

}
