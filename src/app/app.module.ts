import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { StatusService } from './status.service';
import { TimeAgoPipe } from './timeago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
