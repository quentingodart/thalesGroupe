import { CvService } from './../services/cv.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 /*  @Output() selectedCv = new EventEmitter(); */

  cvs: Cv[] = [];
  constructor(private cvService : CvService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.cvService.getListCvsFromApi().subscribe((list) => {
      this.cvs = list;
    },
    (error) => {
      this.toastr.error('Impossible de récupérer la liste. Une liste par défault a été chargée à la place.')
      this.cvs = this.cvService.getListCv();
    })
  }

  /* getSelectedCv(selectedCv : Cv) : void {
    this.selectedCv.emit(selectedCv);
  } */

}
