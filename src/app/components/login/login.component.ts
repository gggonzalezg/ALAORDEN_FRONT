import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/Model/user';
import { MainServiceService } from 'src/app/Services/main-service.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgIcon = 'assets/images/Imagen 6.png';
  imgInfo = 'assets/images/Grupo 7.png';
  imgSeparator = 'assets/images/Trazado 1.png';
  imgCover = 'assets/images/Icon awesome-toolbox.png';
  imgCover2 = 'assets/images/Icon awesome-tools.png';

  User: user;
  constructor(private router: Router, private mainservice: MainServiceService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  async login(form: NgForm){
  if (form.value.email !== '' && form.value.password !== ''){
    const userobj = new user(); // Armar el objeto usuario para enviarlo como parámetro al servicio
    userobj.email = form.value.email;
    userobj.password = form.value.password;

    this.mainservice.getUser(userobj).subscribe( data => {

      if (data.body.message === true){
        sessionStorage.setItem('email', form.value.email);
        sessionStorage.setItem('password', form.value.password);
        sessionStorage.setItem('role', data.body['role']);
        sessionStorage.setItem('userId', data.body['userId']);
        sessionStorage.setItem('role', data.body.role);
        this.router.navigate(['/home']);
        }
        else{
          sessionStorage.setItem('email', '');
          sessionStorage.setItem('password', '');
          sessionStorage.setItem('role', '0');
          sessionStorage.setItem('userId', '');
          this.toastr.error('Ha ocurrido un error, por favor intente nuevamente!', 'Felicidades', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing',
            timeOut: 5000
          });
        }
    });
  }

/*   if(form.value.email === 'hola' && form.value.password === '123'){

    localStorage.setItem('email', form.value.email);
    localStorage.setItem('password', form.value.password);
    this.router.navigate(['/home']);
  }
  else{
    localStorage.setItem('email', '');
    localStorage.setItem('password', '');

  } */

}

}
