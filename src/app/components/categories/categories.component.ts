import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  opened = false;

  imgHeader = 'assets/images/Header.png';
  imgHamburguer = 'assets/images/Hamburguer.png';

  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'},
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
  ];

  constructor(private eventEmitterService: EventEmitterService) { }
  toggleSidebar(){ // Abrir o cerrar el manú lateral
    this.opened = !this.opened;

    }
    ngOnInit() { if (this.eventEmitterService.subsVar == undefined) {// Para poder ejecutar el método togglesidebar() de HomeComponent
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeFirstComponentFunction.subscribe((name: string) => {
        this.toggleSidebar();
      });
    }
  }


  }
