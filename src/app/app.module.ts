import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{weatherService} from './services/weatherservice.service';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import{FlexLayoutModule} from'@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { baseURL,ProcessHTTPMsgService } from './services/restConfig';
import { RestangularModule, Restangular } from 'ngx-restangular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserModule,
    BrowserAnimationsModule,
FormsModule,
HttpModule,
MaterialModule,
FlexLayoutModule,ReactiveFormsModule ,
AppRoutingModule,  BsDropdownModule.forRoot(),
TooltipModule.forRoot(),
ModalModule.forRoot()
  ],
  providers: [weatherService,{provide: 'BaseURL', useValue: baseURL},ProcessHTTPMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
