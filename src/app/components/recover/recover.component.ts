import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  imgIcon: string = "assets/images/Imagen 6.png";
  imgFooter: string = "assets/images/Trazado 6.png";

  message='Ingresa tu correo electrónico para recuperar tu contraseña';
  usersemail: any;
  constructor(private router: Router, private mainservice:MainServiceService) { }

  ngOnInit() { }

  email(form: NgForm){
    this.usersemail = form.value;
  }
 
}