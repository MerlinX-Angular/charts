import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaChartComponent } from './charts/chartjs/area-chart/area-chart.component';
import { Bar1ChartComponent } from './charts/chartjs/bar1-chart/bar1-chart.component';
import { Bar2ChartComponent } from './charts/chartjs/bar2-chart/bar2-chart.component';
import { Line1ChartComponent } from './charts/chartjs/line1-chart/line1-chart.component';
import { Line2ChartComponent } from './charts/chartjs/line2-chart/line2-chart.component';
import { PieChartComponent } from './charts/chartjs/pie-chart/pie-chart.component';
import { PolarChartComponent } from './charts/chartjs/polar-chart/polar-chart.component';
import { RadarChartComponent } from './charts/chartjs/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './charts/chartjs/doughnut-chart/doughnut-chart.component';
import { ScatterChartComponent } from './charts/chartjs/scatter-chart/scatter-chart.component';


const routes: Routes = [
  { path: '', redirectTo: 'area', pathMatch: 'full' },
  { path: 'area', component: AreaChartComponent },
  { path: 'vertical-bar', component: Bar1ChartComponent },
  { path: 'horizontal-bar', component: Bar2ChartComponent },
  { path: 'line1', component: Line1ChartComponent },
  { path: 'line2', component: Line2ChartComponent },
  { path: 'pie', component: PieChartComponent },
  { path: 'polar', component: PolarChartComponent },
  { path: 'radar', component: RadarChartComponent },
  { path: 'doughnut', component: DoughnutChartComponent },
  { path: 'scatter', component: ScatterChartComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

 }
