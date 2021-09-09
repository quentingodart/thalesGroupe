import { CvService } from './../services/cv.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor(private cvService : CvService, private toastr : ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  addCv(form : NgForm) {
    if (form.valid) {
      this.cvService.addNewCvToApi(form.value).subscribe(
        () => {
          this.toastr.success("L'ajout du CV a été effectué.")
          this.router.navigate(['/cv']);
        },
        (error) => {
          this.toastr.error("L'ajout n'a pas fonctionné.")
        }
      )
    }
  }

}
