import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { service } from '../../Model/service.model';
import { company } from '../../Model/company.model';
import { NgForm } from '@angular/forms';

import { MainServiceService } from 'src/app/Services/main-service.service';
import {Pais, PAISES} from '../../Model/paises';
import {Ciudad, CIUDADES} from '../../Model/ciudades';


@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {
  opened = false;

  imgHeader = 'assets/images/Header.png';
  imgHamburguer = 'assets/images/Hamburguer.png';
  service = new service();
  company = new company();
  companyarray = [];
  datarray = [];

  selectedPais: Pais;
  paises: any = PAISES;
  selectedCiudad: Ciudad;
  ciudades: any = CIUDADES;

  constructor(private eventEmitterService: EventEmitterService, private toastr: ToastrService, private router: Router, private mainservice: MainServiceService) { }
  toggleSidebar() { // Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  }
  addService() { // Adicionar campos para añadir servicios
    this.service = new service();
    this.datarray.push(this.service);
  }


  onSubmit(form: NgForm) {
    if (form.value.cname != '' && form.value.caddress != '' && form.value.ccountry != '' && form.value.ccity != '') {
      const companyobj = new company();
      companyobj.name = form.value.cname;
      companyobj.address = form.value.caddress;
      companyobj.country = form.value.paisSelection;
      companyobj.city = form.value.ciudadSelection;

      if (this.datarray.length > 0) {
        const user = sessionStorage.getItem('userId');
        companyobj.owner = user;
        this.mainservice.createcompany(companyobj, user).subscribe(data => {
          const company = data;
          this.datarray.forEach( svc => {
            svc.companyId = company.id;
          } );
          this.mainservice.addservices(this.datarray, company.id).subscribe(() => {
            this.toastr.success('La compañía ha sido creada!', 'Felicidades', {
              positionClass: 'toast-bottom-right',
              progressBar: true,
              progressAnimation: 'decreasing',
              timeOut: 5000
            });

            sessionStorage.setItem('role', '2');
            this.router.navigate(['/home']);
          });
        });
      }else{
        this.toastr.warning('Añada al menos un servicio', 'Avisos', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing',
          timeOut: 5000
        });
      }
    }
  }

  ngOnInit() {
    if (this.eventEmitterService.subsVar == undefined) {// Para poder ejecutar el método togglesidebar() de HomeComponent
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((name: string) => {
          this.toggleSidebar();
        });
    }
    this.datarray.push(this.service); // Crear el campo inicial de servicio
  }

}
