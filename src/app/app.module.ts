import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { mainStoreReducer } from "./state-management/reducers/main.reducer";
import { StoreModule } from "@ngrx/store";
import {TextEditorComponent} from "./components/main/text-editor/text-editor.component";
import {ChatBoardComponent} from "./components/main/chat-board/chat-board.component";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {MessagesService} from "./services/messages.service";
import { AgmCoreModule } from 'angular2-google-maps/core';
import {GMapsService} from "./services/gmaps.service";
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";

const reducers = { mainStoreReducer };

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ChatBoardComponent,
    MainComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducers),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBTHsJPaZ-MYlCvrhwPwLFtDzOxFJEdaRc'})
  ],
  providers: [MessagesService, GMapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
