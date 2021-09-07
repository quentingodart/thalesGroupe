import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  color = "blue";
  filsFavoriteColor = "";
  constructor() { }

  ngOnInit(): void {
  }

  getFilsFavoriteColor(color) : void {
    this.filsFavoriteColor = color;
  }

}
