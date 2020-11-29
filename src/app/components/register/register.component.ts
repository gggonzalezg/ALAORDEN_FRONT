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
  if(form.value.name.trim() != '' && 
     form.value.email.trim() != '' && 
     form.value.password.trim() != '' && 
     form.value.country.trim() != '' && 
     form.value.city.trim() != '' && 
     form.value.phone.trim() != '' && 
     form.value.document.trim() != '' && 
     form.value.documentType.trim() != '' &&
     form.value.lastName.trim() != ''
     ){
    let registerobj = new register();//Armar el objeto register para enviarlo como parámetro al servicio
    registerobj.name = form.value.name;
    registerobj.lastName = form.value.lastName;
    registerobj.email = form.value.email;
    registerobj.password = form.value.password;
    registerobj.country = form.value.country;
    registerobj.city = form.value.city;
    registerobj.phone = form.value.phone;
    registerobj.document = form.value.document;
    registerobj.documentType = form.value.documentType;
    

    this.mainservice.setUser(registerobj).subscribe( data => {

      console.log(data)
      if(data['message'] === 'account created'){
        this.router.navigate(['/login']);
  
        this.toastr.success('Su usuario ha sido creado!', 'Felicidades', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing',
          timeOut: 5000
        });
      }else{
        this.toastr.error('Ha ocurrido un error, por favor intente nuevamente!', 'Felicidades', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing',
          timeOut: 5000
        });
      }
    });
  }
}
}
