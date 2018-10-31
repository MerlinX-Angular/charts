import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnDestroy {
    PieChart: any = [];

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 300);
    }
    createChart() {
      this.PieChart =  new Chart('piechart', {
        type: 'pie',
        data: {
            labels: ['Train', 'Ship', 'Air'],
                datasets: [
                    {
                    data: [220, 630, 150],
                    backgroundColor: ['#88afff', '#c492ee', '#75d6e7']
                    }
                ]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [
                    {
                    display: false
                    }
                ],
                yAxes: [
                    {
                    display: false
                    }
                ]
            },
            legend: {
                labels: {
                    fontColor: 'black'
                }
            },
                title: {
                    display: true,
                    text: 'PIE CHART'
                }
        }
      });
    }

    ngOnDestroy() {
       this.createChart();
    }

}
