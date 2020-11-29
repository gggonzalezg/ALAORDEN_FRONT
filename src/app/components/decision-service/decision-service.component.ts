import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { MainServiceService } from 'src/app/Services/main-service.service';
@Component({
  selector: 'app-decision-service',
  templateUrl: './decision-service.component.html',
  styleUrls: ['./decision-service.component.css']
})
export class DecisionServiceComponent implements OnInit {
  opened = false;
  serviceData : any = {};
  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";


  user: any;
  date: any;
  

  constructor(private eventEmitterService: EventEmitterService, private http:MainServiceService, private router: Router) { }

  toggleSidebar(){ //Abrir o cerrar el menú lateral
    this.opened = !this.opened;
  
    }
    ngOnInit() { 
      
      this.serviceData.service = localStorage.getItem('service');
      this.serviceData.date = localStorage.getItem('date');
      this.serviceData.city = localStorage.getItem('city');
      this.serviceData.contract = localStorage.getItem('contract');
      
      
      if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  }
 
   
  }