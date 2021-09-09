import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-non-stop-image',
  templateUrl: './non-stop-image.component.html',
  styleUrls: ['./non-stop-image.component.css']
})
export class NonStopImageComponent implements OnInit {

  @Input() imgs = [];
  @Input() timer = 1500;
  @Input() isRounded = true;
  @Input() height = 150;
  @Input() width = 150;

  img = "";

  constructor() {

   }

  ngOnInit(): void {
    const observable = new Observable((obs) => {
      let i = this.imgs.length;
      setInterval(() => {
        if (!i) {
          i = this.imgs.length;
        }
        obs.next(i--);
      }, 1000);
    });
    observable.subscribe((val : number) => {
      this.img = this.imgs[val - 1];
    })
  }

}
