import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { search } from 'src/app/Model/search.model';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened = false;
  imgHeader: string = "assets/images/Header.png";
  imgHamburguer: string = "assets/images/Hamburguer.png";
  imgPeople: string = "assets/images/people-1.jpg";
  imgWomen: string = "assets/images/lesbico.jpg";
  imgBack: string = "assets/images/Back_Arrow.png";
  imguser: string = "assets/images/images.png";
  imgexit: string = "assets/images/exit.png";
  search = new search();
  createCompany : boolean;
  
 

    constructor(private router: Router, private eventEmitterService: EventEmitterService) { 
      this.createCompany = sessionStorage.getItem('role') == '1';
    }
  ngOnInit(): void {
    if (this.eventEmitterService.subsVar==undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.toggleSidebar();    
      });    
    }    
  }    

  toggleSidebar(){ //Abrir o cerrar el manú lateral
    this.opened = !this.opened;
    } 
    onSubmit(form: NgForm){
      if(form.value.service != '' && form.value.date != '' && form.value.place != '' && form.value.desc!= ''){
      let searchobj = new search();
      searchobj.type = form.value.service;
      searchobj.date = form.value.date;
      searchobj.city = form.value.place;
      searchobj.desc = form.value.desc;
  
      console.log(searchobj); //Se obtienen los datos de la búsqueda
      
      localStorage.setItem('searchservice',form.value.service);
      localStorage.setItem('searchtime',form.value.date);
      localStorage.setItem('searchlocation',form.value.place);
      localStorage.setItem('searchdesc',form.value.desc);
       
      this.router.navigate(['/serviceoptions']);
    }
  }
}
