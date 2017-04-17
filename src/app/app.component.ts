import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./state-management/state/main.state";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';
import * as ACTIONS from "./state-management/actions/main.actions"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animateCounter', [
      state('even', style({
        color: 'red',
        transform: 'rotateX(0deg)'
      })),
      state('odd',   style({
        color: 'blue',
        transform: 'rotateX(360deg)'
      })),
      transition('even => odd', animate('100ms ease-in')),
      transition('odd => even', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {

  /**
   * Title of the app
   * @type {string}
   */
  title:string = 'Kaixo mundua';

  parity:string = '';

  /**
   * Info label about the state counter
   * @type {string}
   */
  data:string = '';

  constructor (private store:Store<State>) {
    console.log('We have a store! ', store);
    store.select('mainStoreReducer')
      .subscribe( (data:State )=> {
        this.data = 'Zenbakia ' + data.counter + ' da';
        this.parity = data.counter % 2 == 0 ? 'even' : 'odd';
      });
  }

  /**
   * Increment in 1 my counter
   */
  public increment() {
    this.store.dispatch({ type: ACTIONS.INCREMENT, payload: { increment: 1 }});
  }

  /**
   * Reset to zero my counter
   */
  public reset() {
    this.store.dispatch({ type: ACTIONS.RESET});
  }
}
