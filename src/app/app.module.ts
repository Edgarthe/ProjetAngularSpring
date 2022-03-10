import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjetModule } from './projet/projet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
