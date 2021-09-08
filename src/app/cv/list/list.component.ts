import { CvService } from './../services/cv.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() selectedCv = new EventEmitter();

  cvs: Cv[] = [];
  constructor(private cvService : CvService) { }

  ngOnInit(): void {
    this.cvs = this.cvService.getListCv();
  }

  getSelectedCv(selectedCv : Cv) : void {
    this.selectedCv.emit(selectedCv);
  }

}
