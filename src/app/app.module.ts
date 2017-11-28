import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { MyServiceService } from './my-service.service';
import { NewServiceService } from './new-service.service';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { GrandparentComponentComponent } from './grandparent-component/grandparent-component.component';
import { CarsComponentComponent } from './cars-component/cars-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    GrandparentComponentComponent,
    CarsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [MyServiceService, NewServiceService,Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
