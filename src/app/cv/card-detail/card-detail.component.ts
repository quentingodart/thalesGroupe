import { EmbaucheService } from './../../embauche/service/embauche.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor(private embaucheService : EmbaucheService, private toastr : ToastrService, private cvService : CvService) {}

  ngOnInit(): void {
    this.cvService.selectCvSubject.subscribe((newCv) => {
      console.log('Nouveau Cv : ' + newCv.firstname);
      (this.cv = newCv);}
      );
  }

  embaucher(): void {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toastr.success(`Le cv de ${this.cv.firstname} ${this.cv.name} a été préselectionné`);
    } else {
      this.toastr.warning(`${this.cv.firstname} ${this.cv.name} est déjà préselectionné`);
    }
  }
}
