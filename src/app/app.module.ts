import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// servicio 
import { dataDummyService } from './services/dataDummy.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    dataDummyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
