import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {search} from 'src/app/Model/search.model';
import {EventEmitterService} from 'src/app/Services/event-emitter.service';
import {Ciudad, CIUDADES} from '../../Model/ciudades';
import {ToastrService} from 'ngx-toastr';
import {Servicio, SERVICIOS} from '../../Model/Servicio';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    opened = false;
    imgHeader = 'assets/images/Header.png';
    imgHamburguer = 'assets/images/Hamburguer.png';
    imgPeople = 'assets/images/people-1.jpg';
    imgWomen = 'assets/images/lesbico.jpg';
    imgBack = 'assets/images/Back_Arrow.png';
    imguser = 'assets/images/images.png';
    imgexit = 'assets/images/exit.png';
    search = new search();
    createCompany: boolean;
    selectedCiudad: Ciudad;
    ciudades: any = CIUDADES;
    selectedService: Servicio;
    servicios: any = SERVICIOS;

    constructor(private router: Router, private eventEmitterService: EventEmitterService, private toastr: ToastrService) {
        this.createCompany = sessionStorage.getItem('role') == '1';
    }

    ngOnInit(): void {
        if (this.eventEmitterService.subsVar == undefined) {// Para poder ejecutar el método togglesidebar() de HomeComponent
            this.eventEmitterService.subsVar = this.eventEmitterService.invokeFirstComponentFunction.subscribe((name: string) => {
                this.toggleSidebar();
            });
        }
    }

    toggleSidebar() { // Abrir o cerrar el manú lateral
        this.opened = !this.opened;
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        if (form.value.service != '' && form.value.date != '' && form.value.place != '' && form.value.desc != '') {
            const searchobj = new search();
            searchobj.type = form.value.service;
            searchobj.date = form.value.date;
            searchobj.city = form.value.place;
            searchobj.desc = form.value.desc;

            console.log(searchobj); // Se obtienen los datos de la búsqueda

            localStorage.setItem('searchservice', form.value.serviceSelection);
            localStorage.setItem('searchtime', form.value.date);
            localStorage.setItem('searchlocation', form.value.ciudadSelection);
            localStorage.setItem('searchdesc', form.value.desc);

            this.router.navigate(['/serviceoptions']);
        } else {
            this.toastr.error('Ha ocurrido un error, por favor intente nuevamente!', 'Felicidades', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing',
                timeOut: 5000
            });
        }
    }
}
