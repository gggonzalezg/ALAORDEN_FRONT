import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Model/user';
import { service_options } from '../Model/service_options.model';
import { HttpParams } from "@angular/common/http";
import { register } from '../Model/register.model';
import { search } from '../Model/search.model';
import { company } from '../Model/company.model';
import { company_collaborator } from '../Model/company_collaborator.model';
import { service } from '../Model/service.model';
import { history } from '../Model/history.model';
import { category } from '../Model/category.model';
import { contract } from '../Model/contract.model';
import { contract_service } from '../Model/contract_service.model';

    

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080';

  getUser(userobj:user){
    //Login user
    return this.http.post<user>(`${this.Url}/auth/login`,userobj, {observe: 'response'});
  }

  setUser(registerobj: register){
    //Register user
    return this.http.post<user>(`${this.Url}/user/register`,registerobj); 
  }

  getserviceoptions(searchobj: search){
    //Obtener opciones de servicios a partir de la búsqueda principal
    return this.http.post<service_options[]>(`${this.Url}/service/search`, searchobj);
  }
  getcompanies(){
    //Obtener el listado de compañías para que el prestador de servicios se identifíque con una
    return this.http.get<company[]>(`${this.Url}/company/list`); 
  }

  joincompany(collaborator: company_collaborator){
    //Unir a prestador de servicios a compañía
    return this.http.post<company_collaborator>(`${this.Url}/`, collaborator); 
  }

  createcompany(newcompany: company, userId : string){
    //Crear compañía
    return this.http.post<company>(`${this.Url}/company/create-from-user/${userId}`, newcompany); 
  }

  addservices(newservices: service[], companyId : string){
    //Agregar servicios a la compañía
    return this.http.post<service>(`${this.Url}/service/register/${companyId}`, newservices); 
  }

  getmyUser(email){
    //Obtener información del usuario en sesión actualmente
    return this.http.get<register>(`${this.Url}/ `,{params: new HttpParams().set('email',email)});
  }
  gethistory(email: any){
    //Obtener el historial de servicios del usuario en sesión
    return this.http.post<history[]>(`${this.Url}/ `, email); 
  }
  /*getservicehistorycard(id: any){
    //Obtener el historial de servicios del usuario en sesión
    return this.http.get<history>(`${this.Url}/`, id); 
  }*/
  /*getcategories(){
    return this.http.get<category[]>(`${this.Url}/ `); 
  }*/
   getnotifications(email: any){
    return this.http.get<contract[]>(`${this.Url}/ `, {params: new HttpParams().set('email',email)}); 
  }
  getpaymentypes(){
    return this.http.get<[]>(`${this.Url}/ `); 
  }
  setcontract(contract : contract_service){
    //Agendar servicio 
    return this.http.post<contract_service>(`${this.Url}/`, contract); 
  }

}

