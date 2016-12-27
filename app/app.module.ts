import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSemanticModule } from 'ng-semantic';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Route
import {routing} from './app.route';
// Components
import { MainComponent } from './app.component';
import {HomeComponent} from './HomeComponent/home.component'


@NgModule({
  imports: [
    BrowserModule, 
    NgSemanticModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    MainComponent,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [MainComponent]
})
export class MainModule {

}