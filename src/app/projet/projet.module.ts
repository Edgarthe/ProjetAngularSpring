import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ModuleComponent } from './module/module.component';
import { FiliereComponent } from './filiere/filiere.component';
import { PersonneComponent } from './personne/personne.component';



@NgModule({
  declarations: [
    ModuleComponent,
    FiliereComponent,
    PersonneComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
     RouterModule.forRoot([
      { path: 'module', component: ModuleComponent },
      { path: 'filiere', component: FiliereComponent },
      { path: 'personne/:arg', component:PersonneComponent }
     ])
  ],
  exports: [FiliereComponent]
})
export class ProjetModule { }
