import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filiere } from './filiere/filiere.interface';
import { Module } from './module/module.interface';
import { Personne } from './personne/personne.interface';


// const URLModule = 'http://localhost:8080/api/module';
// const URLFiliere = 'http://localhost:8080/api/filiere';
// const URLPersonne = 'http://localhost:8080/api/personne';


// interface ApiResponse {
//   modules: Module[],
//   filieres: Filiere[],
//   personnes: Personne[]
// }

@Injectable({
  providedIn: 'root'
})
export class ProjetservService {

  private URLModule = 'http://localhost:8080/api/module';
  private URLFiliere = 'http://localhost:8080/api/filiere';
  private URLPersonne = 'http://localhost:8080/api/personne';

  constructor(private http: HttpClient) { }


  // module
  getModules(listLibelle: string): Observable<Module[]> {
    return this.http.get<Module[]>("http://localhost:8080/api/module");     
  }

  getModule(id: number): Observable<any> {
    return this.http.get(`${this.URLModule}/${id}`);
  }

  ceateModule(module: Module): Observable<Object>{
    return this.http.post(`${this.URLModule}`, module);
  }

  deleteModule(id: number): Observable<any>{
    return this.http.delete(`${this.URLModule}/${id}`, {responseType: 'text'});
  }

  updateModule(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.URLModule}/${id}`, value);
  }


  // filiere
  getFiliere(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>("http://localhost:8080/api/filiere");
  }

  ceateFiliere(filiere: Filiere): Observable<Object>{
    return this.http.post(`${this.URLFiliere}`, filiere);
  }

  updateFiliere(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.URLFiliere}/${id}`, value);
  }

  deleteFiliere(id: number): Observable<any>{
    return this.http.delete(`${this.URLFiliere}/${id}`, {responseType: 'text'});
  }

  // personne
  getPersonnes(listPers: string): Observable<Personne[]> {
    return this.http.get<Personne[]>("http://localhost:8080/api/personne");
  }
  
}


