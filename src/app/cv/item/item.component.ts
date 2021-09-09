import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Input() size = 50;
  @Input() isRounded = true;
/*   @Output() selectedCv = new EventEmitter(); */

  constructor(private cvService : CvService) { }

  ngOnInit(): void {
  }

  /* emitSelectedCv() {
    this.selectedCv.emit(this.cv);
  }
 */

  setSelectedCv() {
    this.cvService.actualSelectedCv(this.cv);
  }
}
