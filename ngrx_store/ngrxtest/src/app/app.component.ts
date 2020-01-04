import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "./AppState";
import {decrease, increment} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrxtest';

  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {

    this.counter$ = store.select('counter');

  }

  ngOnInit(): void {

  }

  clickAdd() {
      console.log('add');
      this.store.dispatch(increment());
  }

  clickDecrease() {
      console.log('decrease');
      this.store.dispatch(decrease());
  }
}
