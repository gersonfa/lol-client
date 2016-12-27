import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './app.component'
import {HomeComponent} from './HomeComponent/home.component'
const ROUTES : Routes = [
  { path: '', component: HomeComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(ROUTES);