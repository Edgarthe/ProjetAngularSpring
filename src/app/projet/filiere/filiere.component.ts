import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { Module } from '../module/module.interface';
import { Personne } from '../personne/personne.interface';
import { ProjetservService } from '../projetserv.service';
import { Filiere } from './filiere.interface';

@Component({
  selector: 'filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  listFilieres: string[] = ['Angular', 'Java'];
  seletectedListFilière: string = '';
  

  //Proprietes
  modules: Module[] = [];
  filieres: Filiere[] = [];
  personnes: Personne = {nom:" ", prenom:" ", type:" "};
  nomFiliere =" ANGULAR"


  constructor(
    private projetservService: ProjetservService,
    private route: ActivatedRoute
    ) { 

      console.log('constructor');

    const source$ = this.projetservService.getFiliere()

    source$.subscribe((filiere: any) => {console.log(filiere)}); //this.filieres = filiere

    source$.pipe(switchMap(res => res[0].modules))
    .subscribe((modules) => this.modules)

    source$.pipe(filter(res => res[0].libelle ===this.nomFiliere))
    .subscribe((filiere) => console.log(filiere))

  }


  ngOnInit(): void {
  }


  handleClick() {
    this.projetservService
      .getModules(this.seletectedListFilière)
      .subscribe((modules: Module[]) => {
        this.modules = modules;
      })
  }
}
