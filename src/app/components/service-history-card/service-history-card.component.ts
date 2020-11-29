import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { MainServiceService } from 'src/app/Services/main-service.service';


@Component({
  selector: 'app-service-history-card',
  templateUrl: './service-history-card.component.html',
  styleUrls: ['./service-history-card.component.css']
})
export class ServiceHistoryCardComponent implements OnInit {
  opened = false;

  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";

  serviceid: any;
  servicename: any;
  serviceworker: any;
  servicescore: any;
  servicecomments: any;
  constructor(private eventEmitterService: EventEmitterService, private http:MainServiceService, private router: Router) { }

  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  
    }
    ngOnInit() { 
      
    //Mostrar los datos del item 
    this.serviceid = localStorage.getItem('hid');
    this.servicename = localStorage.getItem('hservice');
    this.serviceworker = localStorage.getItem('hworker');
    this.servicescore = localStorage.getItem('hscore');
    this.servicecomments = localStorage.getItem('hcomments');
      
      if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  }
  /*showworker(){
    //Ir al detalle del prestador del servicio 
    this.router.navigate(['/worker']);
  }*/
 
   
  }