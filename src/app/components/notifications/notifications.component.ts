import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contract } from 'src/app/Model/contract.model';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  opened = false;
  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";

  contracts: contract[];

  constructor(private eventEmitterService: EventEmitterService, private http:MainServiceService, private router: Router) { }

  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
  
    }
    ngOnInit() { 
      
      this.http.getnotifications(localStorage.getItem('email')) // Obtener las notificaciones del servicio
      .subscribe(data =>{
        this.contracts = data;
      });
      
      if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  }
  selectedservice(i : any){
    
    if (this.contracts[i].user === localStorage.getItem('email')){//Si el usuario en sesión es quien soicitó ese servicio
      return;
    }
    else{//Si el usuario en sesión es el prestador de servicios 
      localStorage.setItem('notiuser',this.contracts[i].user);
      localStorage.setItem('noticompany',this.contracts[i].company);
      localStorage.setItem('notidate',this.contracts[i].date);

      this.router.navigate(['/decisionservice']);
    }

    
  }

}
