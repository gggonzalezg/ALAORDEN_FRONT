import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentinfo',
  templateUrl: './paymentinfo.component.html',
  styleUrls: ['./paymentinfo.component.css']
})
export class PaymentinfoComponent implements OnInit {

  imgHeader: string = "assets/images/Header.png";
  imgPay: string = "assets/images/Imagen 2.png";
  constructor() { }

  ngOnInit(): void {
  }

}
