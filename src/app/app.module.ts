import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SalariedComponent} from './salaried/salaried.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {SalariedService} from "./salaried/salaried.service";


@NgModule({
  declarations: [
    AppComponent,
    SalariedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [SalariedService],
  bootstrap: [AppComponent]

})
export class AppModule {
}
