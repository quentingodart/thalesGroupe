import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedCv = null;

  constructor() { }

  ngOnInit(): void {
  }


  getSelectedCv(selectedCv : Cv) {
    this.selectedCv = selectedCv;
  }

}
