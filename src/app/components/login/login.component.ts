import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/Model/user';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgIcon: string = "assets/images/Imagen 6.png";
  imgInfo: string = "assets/images/Grupo 7.png";
  imgSeparator: string = "assets/images/Trazado 1.png";
  imgCover: string = "assets/images/Icon awesome-toolbox.png";
  imgCover2: string = "assets/images/Icon awesome-tools.png";
  
  User: user;
  constructor(private router: Router, private mainservice:MainServiceService) { }

  ngOnInit() {
   
  }

  async login(form: NgForm){
  if(form.value.email != '' && form.value.password != ''){
    let userobj = new user();//Armar el objeto usuario para enviarlo como parámetro al servicio
    userobj.email = form.value.email;
    userobj.password = form.value.password;

    this.mainservice.getUser(userobj).subscribe( data => {

      if(data.body['message'] === true){
        sessionStorage.setItem('email', form.value.email);
        sessionStorage.setItem('password', form.value.password);
        sessionStorage.setItem('role', data.body['role']);
        sessionStorage.setItem('userId', data.body['userId']);
        this.router.navigate(['/home']);
        }
        else{
          sessionStorage.setItem('email', '');
          sessionStorage.setItem('password', '');
          sessionStorage.setItem('role', '0');
          sessionStorage.setItem('userId', '');
        }
    })
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
