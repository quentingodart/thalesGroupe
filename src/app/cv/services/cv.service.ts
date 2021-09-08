import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];

  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 39, 'teacher', 'rotating_card_profile3.png', 123456),
      new Cv(2, 'Kemehlo', 'estelle', 20, 'Dev', 'rotating_card_profile1.png', 8547854),
      new Cv(3, 'Doe', 'Kevin', 20, 'Tech', '', 16516321)
    ];
  }

  getListCv() : Cv[] {
    return this.cvs;
  }

  getCvById(id) {
    return this.cvs.find(x => x.id == id);
  }

  deleteCvFromList(cv : Cv) : boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1) {
      return false
    } else {
      this.cvs.splice(index, 1);
      return true;
    }
  }
}
