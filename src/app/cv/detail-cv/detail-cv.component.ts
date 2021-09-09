import { CvService } from './../services/cv.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cv }  from '../model/cv.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() cv : Cv = null

  constructor(private cvService : CvService,
    private activatedRoute : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      /* this.cv = this.cvService.getCvById(+params.id); */
      this.cvService.getCvByIdFromApi(+params.id).subscribe((response) => {
        this.cv = response;
      },
      (error) => {
        this.toastr.error("Le Cv n'a pas été trouvé.");
        this.router.navigate(['/cv']);
      });
      /* if (!this.cv) {
        this.router.navigate(['/cv']);
      } */
    })
  }

  deletePersonne() {
    /* if (this.cvService.deleteCvFromList(this.cv)) {
      this.toastr.success('Le Cv a bien été supprimé.');
      this.router.navigate(['/cv']);
    } else {
      this.toastr.error("Le Cv n'a pas été supprimé.");
    } */
    this.cvService.deleteCvFromApi(this.cv.id).subscribe(
      (res) => {
        this.toastr.success("Le Cv a bien été supprimé.");
        this.router.navigate(['/cv']);
      },
      (error) => {
        this.toastr.error("Le Cv n'a pas pu être supprimé.");
      })
  }

}
