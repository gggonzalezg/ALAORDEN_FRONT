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

  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";


  user: any;
  date: any;
  

  constructor(private eventEmitterService: EventEmitterService, private http:MainServiceService, private router: Router) { }

  toggleSidebar(){ //Abrir o cerrar el menú lateral
    this.opened = !this.opened;
  
    }
    ngOnInit() { 
      
      localStorage.getItem('notiuser');
      localStorage.getItem('noticompany');
      localStorage.getItem('notidate');
      
      
      if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  }
 
   
  }