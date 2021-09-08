import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  defaultColor = "blue";
  divColor = '';
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        this.defaultColor = params.favoriteColor;
        this.changeColor(this.defaultColor);
    })
  }

  changeColor(newColor : string) : void{
    this.divColor = newColor;
  }
}
