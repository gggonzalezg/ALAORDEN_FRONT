import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from 'src/app/Model/register.model';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imgIcon: string = "assets/images/Imagen 6.png";
  imgSide: string = "assets/images/Trazado 9.png";

  Register: register;
  constructor(private router: Router, private mainservice:MainServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
register(form: NgForm){
  if(form.value.name != '' && form.value.email != '' && form.value.password != '' && form.value.country != '' && form.value.city != '' && form.value.phone != '' && form.value.location != ''){
    let registerobj = new register();//Armar el objeto register para enviarlo como parámetro al servicio
    registerobj.name = form.value.name;
    registerobj.email = form.value.email;
    registerobj.password = form.value.password;
    registerobj.country = form.value.country;
    registerobj.city = form.value.city;
    registerobj.phone = form.value.phone;
    



    if(this.mainservice.setUser(registerobj)){
      this.router.navigate(['']);

      this.toastr.success('Su usuario ha sido creado!', 'Felicidades', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing',
        timeOut: 5000
      });
    }
    
  }
}
}
