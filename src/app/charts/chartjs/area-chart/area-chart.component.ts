import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
    selector: 'app-area-chart',
    templateUrl: './area-chart.component.html',
    styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit, OnDestroy {
    AreaChart: any = [];

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 300);
    }
    createChart() {
     this.AreaChart = new Chart('areachart', {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                datasets: [{
                    backgroundColor: 'rgba(205, 56, 228, 0.36)',
                    borderColor: 'rgb(207, 56, 228)',
                    data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                    label: 'Dataset',
                    fill: 'origin'
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                legend: {
                    display: true
                },
                maintainAspectRatio: false, // full display
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    display: true,
                    text: 'AREA CHART'
                }
            }
        });
    }

    ngOnDestroy() {
       this.createChart();
    }

}
