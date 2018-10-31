import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';

import { BidiModule } from '@angular/cdk/bidi'; // RTL

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
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


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // main-nav
import { LayoutModule } from '@angular/cdk/layout';
import {
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,

        MatCardModule, // card
        MatTabsModule
       } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AreaChartComponent,
    Bar1ChartComponent,
    Bar2ChartComponent,
    Line1ChartComponent,
    Line2ChartComponent,
    PieChartComponent,
    PolarChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    ScatterChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    BidiModule
   // ChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
