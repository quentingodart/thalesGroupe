import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-text',
  templateUrl: './customize-text.component.html',
  styleUrls: ['./customize-text.component.css']
})
export class CustomizeTextComponent implements OnInit {

  color = 'black';
  size = 30;
  font = 'Arial';


  fontList = ["Arial", "Florence", "Garamond"]

  constructor() { }

  ngOnInit(): void {
  }

}
