import {ActionReducer, Action} from "@ngrx/store";

import {State, initialState} from "../state/main.state";

import * as ACTIONS from "../actions/main.actions";


export const mainStoreReducer: ActionReducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.SEND_MESSAGE: {
      state.messages.push(action.payload);
      return state;
    }
    case ACTIONS.GET_MESSAGES: {
      return {
        messages: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
