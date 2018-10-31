import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  side = true;
  dire;
  lside;
  rside;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver) {
    this.check(this.side);
  }

  check(value) {
    this.side = !value;
    if (this.side) {
      this.rside = 'LTR';
      this.lside = 'RTL';
      return this.dire = 'rtl';
    } else {
       this.lside = 'LTR';
       this.rside = 'RTL';
       return this.dire = 'lrl';
    }
  }

}
