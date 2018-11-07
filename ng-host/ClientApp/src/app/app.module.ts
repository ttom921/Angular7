import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page404Component } from './page404/page404.component';
import { OperationModule } from './operation/operation.module';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OperationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
