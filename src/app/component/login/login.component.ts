import { User } from './../../model/user.model';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private toastr : ToastrService, private router : Router) { }

  ngOnInit(): void {
  }

  processForm(monFormulaire: NgForm) {
    const usr = new User(monFormulaire.control.get('email').value, monFormulaire.control.get('password').value)
    this.loginService.login(usr).subscribe((res: any) => {
      if (res && res.id) {
        localStorage.setItem('userToken', res.id);
        this.toastr.success("Bienvenue dans l'application " + monFormulaire.control.get('email').value);
        this.router.navigate(['/cv']);
      }
    },
    (error) => {
      this.toastr.error("Une erreur est survenue lors de la connexion. Vérifier les informations renseignés.")
    })
  }

}
