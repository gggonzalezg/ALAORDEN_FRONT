import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened = false;
  imgIcon: string = "assets/images/Imagen 61.png";
  imgBack: string = "assets/images/Back_Arrow.png";
  imguser: string = "assets/images/images.png";
  imgexit: string = "assets/images/exit.png";
  
  

  constructor(private router: Router, private eventEmitterService: EventEmitterService ) { }

  ngOnInit(): void {
  }
  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
    }
  logout(){ //Cerrar sesión y olvidar credenciales
    localStorage.setItem('email','');
    localStorage.setItem('password','');
    this.router.navigate(['']);
  }
  firstComponentFunction(){ //Para poder ejecutar el método togglesidebar() de HomeComponent 
    this.eventEmitterService.onFirstComponentButtonClick();    
  } 
}
