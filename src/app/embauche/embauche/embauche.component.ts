import { EmbaucheService } from '../service/embauche.service';
import { Component, OnInit } from '@angular/core';
import { Cv } from '../../cv/model/cv.model'


@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauches: Cv[] = [];
  constructor(private embaucheService: EmbaucheService) {}
  ngOnInit(): void {
    this.embauches = this.embaucheService.getEmbauchees();
  }
}
