import { Component, OnInit } from '@angular/core';
import { Filiere } from '../filiere/filiere.interface';
import { Personne } from '../personne/personne.interface';
import { ProjetservService } from '../projetserv.service';
import { Module } from './module.interface';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  urlParam: string | null = '';

  listLibelles: string[] = ['Angular', 'Git', 'Spring'];
  seletectedListLibelle: string = '';
  

  //Proprietes
  modules: Module[] = [];
  filieres: Filiere[] = [];
  personnes: Personne = {nom:" ", prenom:" ", type:" "};
  nomFiliere =" ANGULAR"


  constructor(
    private projetservService: ProjetservService,
    private route: ActivatedRoute,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.urlParam = this.route.snapshot.paramMap.get('arg');
  }

  reloadData(){
    //this.modules = this.projetservService.getModules();
  }

  deleteModule(id: number) {
    this.projetservService
      .deleteModule(id)
      .subscribe((modules: Module[]) => {
        this.modules = modules;
        console.log(module)
      })
  }

  updateModule(id: number){
    //this.router.navigate({'update', id});
    console.log(id)
  }

  detailModule(id: number){
   //this.router.navigate({'modules', id});
    console.log(id)
  }

  
}
