import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createAction, createReducer, StoreModule, on } from "@ngrx/store";
import {FormsModule} from "@angular/forms";


export const increment = createAction('increment');
export const decrease = createAction('decrease');

export const initState = 0;

const _counterReducer = createReducer(initState,
      on(increment, state => state + 1),
      on(decrease, state => state - 1)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

const productsReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD':
      return [ ...state, { ...action.payload } ];
    default:
      return state;
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      products: productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
