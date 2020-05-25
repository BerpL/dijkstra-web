import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  urlImage:string;

  constructor() { 
   
  }

  ngOnInit(): void {
    this.urlImage = "assets/img/about.jpg";
  }

}
