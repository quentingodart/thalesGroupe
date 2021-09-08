import { CvService } from './../services/cv.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedCv = null;

  constructor(private toastr : ToastrService) {

  }

  ngOnInit(): void {
    this.toastr.info('Bienvenue sur notre CvTech');
  }


  getSelectedCv(selectedCv : Cv) {
    this.selectedCv = selectedCv;
  }

}
