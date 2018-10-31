import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Line1ChartComponent } from './line1-chart.component';

describe('Line1ChartComponent', () => {
  let component: Line1ChartComponent;
  let fixture: ComponentFixture<Line1ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Line1ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Line1ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
