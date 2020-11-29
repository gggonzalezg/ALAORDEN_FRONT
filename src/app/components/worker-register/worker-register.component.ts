import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { company } from 'src/app/Model/company.model';
import { company_collaborator } from 'src/app/Model/company_collaborator.model';

@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.component.html',
  styleUrls: ['./worker-register.component.css']
})
export class WorkerRegisterComponent implements OnInit {
  opened = false;
  email='';
  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";

  searchText;
  companies : company[];

  constructor( private eventEmitterService: EventEmitterService, private toastr: ToastrService, private router: Router, private http:MainServiceService ) { }
  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  
    }
    JoinCompany(i: any) {

      //Seleccionar una compañía para convertirse en prestador de servicios
      let collaboratorobj = new company_collaborator();
      collaboratorobj.email = this.email;
      collaboratorobj.company = this.companies[i].name;

      if(this.http.joincompany(collaboratorobj)){ //Enviar la compañía y el usuario al servicio

      
      this.toastr.success('Has sido agregado a la compañía!', 'Felicidades', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing',
        timeOut: 5000
      });
      this.router.navigate(['/home']);
    }else{
        this.toastr.error('Ha ocurrido un error, por favor intente nuevamente!', 'Felicidades', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing',
          timeOut: 5000
        });
      }
  }


    ngOnInit() { 

      //Recuperar el email del usuario en sesión
      this.email = localStorage.getItem('email');
      
      this.getCompanies();

      if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  } 
    
  getCompanies(){
    this.http.getcompanies() // Enviar los parámetros de búsqueda al servicio
    .subscribe(data =>{
      this.companies = data;
    });
  }
   
  } 
