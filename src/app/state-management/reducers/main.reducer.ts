import {ActionReducer, Action} from "@ngrx/store";

import {State, initialState} from "../state/main.state";

import * as ACTIONS from "../actions/main.actions";


export const mainStoreReducer: ActionReducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT: {
      return {
        counter: state.counter + action.payload.increment
      }
    }
    case ACTIONS.RESET: {
      return {
        counter: 0
      }
    }
    default: {
      return state;
    }
  }
};
