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
  isSeller = false;

  contracts: contract[];

  constructor(private eventEmitterService: EventEmitterService, private http: MainServiceService, private router: Router) {
    this.isSeller = sessionStorage.getItem('role') === '2';
  }

  toggleSidebar() { //Abrir o cerrar el manú lateral
    this.opened = !this.opened;

  }
  ngOnInit() {
    let userId = sessionStorage.getItem('userId');
    this.http.getnotifications(userId) // Obtener las notificaciones del servicio
      .subscribe(data => {
        this.contracts = data;
      });

    if (this.eventEmitterService.subsVar == undefined) {//Para poder ejecutar el método togglesidebar() de HomeComponent 
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((name: string) => {
          this.toggleSidebar();
        });
    }
  }
  selectedservice(i: any) {

    this.http.getContractDataToDecide(i.contractId).subscribe(data => {
      let newData = data;

      console.log(i, data)
      localStorage.setItem('service', newData['serviceName']);
      localStorage.setItem('date', newData['contractDate']);
      localStorage.setItem('city', newData['cityName']);
      localStorage.setItem('contract', newData['contract']);

      this.router.navigate(['/decisionservice']);
    })


    }

}
