import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "./state-management/state/main.state";
import {GET_MESSAGES} from "./state-management/actions/main.actions";

@Injectable()
export class MessagesService {

  items: FirebaseListObservable<any[]>;

  constructor(private store: Store<State>, db: AngularFireDatabase) {
    this.store.select('mainStoreReducer');

    this.items = db.list('/messages');

    this.items.subscribe((data) =>{
      console.log(data);
      this.store.dispatch({ type: GET_MESSAGES, payload: data });
    } )
  }

  pushMessage(message) {
    this.items.push(message);
  }

}

