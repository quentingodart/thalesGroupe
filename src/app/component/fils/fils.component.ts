import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  favoriteColor = "blue";

  @Input() color = "red";
  @Output() emitColor = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitFavoriteColor() {
    this.emitColor.emit(this.favoriteColor);
  }

}
