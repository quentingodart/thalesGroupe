import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Output() selectedCv = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitSelectedCv() {
    this.selectedCv.emit(this.cv);
  }

}
