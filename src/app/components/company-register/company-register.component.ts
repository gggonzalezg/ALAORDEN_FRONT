import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { service } from '../../Model/service.model';
import { company } from '../../Model/company.model';
import { NgForm } from '@angular/forms';

import { MainServiceService } from 'src/app/Services/main-service.service';


@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {
  opened = false;

  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";
  service = new service();
  company = new company();
  companyarray=[];
  datarray=[];

  constructor( private eventEmitterService: EventEmitterService, private toastr: ToastrService, private router: Router, private mainservice:MainServiceService ) { }
  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  }
  addService(){ //Adicionar campos para añadir servicios
    this.service = new service();
    this.datarray.push(this.service);
  }
  

  onSubmit(form: NgForm){
    if(form.value.cname != '' && form.value.clocation != '' && form.value.ccountry != '' && form.value.ccity!= ''){
    let companyobj = new company();
    companyobj.name = form.value.cname;
    companyobj.location = form.value.clocation;
    companyobj.country = form.value.ccountry;
    companyobj.city = form.value.ccity;

    console.log(companyobj); //Se obtienen los datos de la compañía
    console.log(this.datarray); //Se obtienen los datos de los servicios

    let user = sessionStorage.getItem('userId');
    if(this.mainservice.createcompany(companyobj, user)){//Si se creó la compañía exitosamente
      if(this.mainservice.addservices(this.datarray)){

        this.toastr.success('La compañía ha sido creada!', 'Felicidades', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing',
          timeOut: 5000
        });
        this.router.navigate(['/home']);
      }
    }
  }
  }

  ngOnInit() { if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
    this.eventEmitterService.subsVar = this.eventEmitterService.    
    invokeFirstComponentFunction.subscribe((name:string) => {    
      this.toggleSidebar();    
    });    
  }
  this.datarray.push(this.service); //Crear el campo inicial de servicio   
}

}
