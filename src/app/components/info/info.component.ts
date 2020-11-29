import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  imgIcon: string = "assets/images/Imagen 6.png";
  imgSeparator: string = "assets/images/Trazado 11.png";

  constructor() { }

  ngOnInit(): void {
  }

}
