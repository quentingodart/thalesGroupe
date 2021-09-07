import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  letters = '0123456789ABCDEF';
  color = '#';

  @HostBinding('style.color') styleColor = null;
  @HostBinding('style.border-color') borderColor = null;

  @HostListener('keydown') onKeyDown() {
    this.getRandomColor();
    this.styleColor = this.color;
    this.borderColor = this.color;
  }

  constructor() { }


  getRandomColor() {
    this.color = '#';
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
    }
}
}
