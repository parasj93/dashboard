import {Component, OnInit} from '@angular/core';
import {Observable, from, Subscription} from 'rxjs';
//import {of} from 'rxjs/operators';

import {
  trigger,
  transition,
  style,
  state,
  stagger,
  query,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  constructor() {}

  obser: any;
  subs: Subscription;

  ngOnInit() {
    // this.obser = from([1, 2, 3, 6, 5]);
    // this.subs = this.obser.subscribe(x => console.log(x));
    // this.subs.unsubscribe();
  }

  exp = '';

  goAnimate() {
    this.exp = 'goAnimate';
  }
}
