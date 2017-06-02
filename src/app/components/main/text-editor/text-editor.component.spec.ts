import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorComponent } from './text-editor.component';
import {FormsModule} from "@angular/forms";
import {MessagesService} from "../../../services/messages.service";
import {Store, StoreModule} from "@ngrx/store";
import {mainStoreReducer} from "../../../state-management/reducers/main.reducer";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../../../environments/environment";
import {AgmCoreModule} from "angular2-google-maps/esm/core";

describe('TextEditorComponent', () => {
  let component: TextEditorComponent;
  let fixture: ComponentFixture<TextEditorComponent>;
  let messagesServiceMock = {
    pushMessage: jasmine.createSpy('pushMessage')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEditorComponent ],
      imports: [
        FormsModule,
        StoreModule.provideStore({ mainStoreReducer }),
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBTHsJPaZ-MYlCvrhwPwLFtDzOxFJEdaRc'})
      ],
      providers: [
        { provide: MessagesService, useValue: messagesServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('username & password are empty after reset', () => {
    component['username'] = 'Juan';
    component['message'] = '123456';

    component.resetForm();
    fixture.detectChanges();

    expect(component['username']).toBe('');
    expect(component['message']).toBe('');
  });

  fit('messageService to be called', () => {
    component['username'] = 'Juan';
    component['message'] = '123456';

    fixture.detectChanges();

    component.sendMessage();

    expect(component['username']).toBe('');
    expect(component['message']).toBe('');
    expect(messagesServiceMock.pushMessage).toHaveBeenCalled();
  });
});
