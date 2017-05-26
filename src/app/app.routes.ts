import {Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {FormComponent} from "./components/form/form.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'user',
    component: FormComponent
  }
]

