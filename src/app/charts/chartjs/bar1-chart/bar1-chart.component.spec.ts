import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar1ChartComponent } from './bar1-chart.component';

describe('BarChartComponent', () => {
  let component: Bar1ChartComponent;
  let fixture: ComponentFixture<Bar1ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bar1ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bar1ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
