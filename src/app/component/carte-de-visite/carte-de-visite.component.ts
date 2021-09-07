import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-de-visite',
  templateUrl: './carte-de-visite.component.html',
  styleUrls: ['./carte-de-visite.component.css']
})
export class CarteDeVisiteComponent implements OnInit {
  defaultPathToImage = "rotating_card_profile3.png"

  lastName = "LastName";
  firstName = "FirstName";
  work = "JobName";
  path = this.defaultPathToImage;

  constructor() { }

  ngOnInit(): void {
  }
}
