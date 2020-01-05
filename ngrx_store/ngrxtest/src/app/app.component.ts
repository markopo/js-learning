import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "./AppState";
import {decrease, increment} from "./app.module";
import {Product} from "./product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrxtest';

  counter$: Observable<number>;

  products$: Observable<Product[]>;

  newProduct: Product;

  id = 0;

  constructor(private store: Store<AppState>) {

    this.counter$ = store.select('counter');

    this.products$ = this.store.select('products');

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

  clickAddProduct() {
      console.log('product: ', this.newProduct);

      if(!this.newProduct) {
        return;
      }

      this.store.dispatch({
          type: 'ADD',
          payload: { name: this.newProduct, id: this.id++ }
      })
  }
}
