import { Cv } from './../model/cv.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { APIS } from 'src/app/utils/api';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  public selectCvSubject = new Subject<Cv>();

  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 39, 'teacher', 'rotating_card_profile3.png', 123456),
      new Cv(2, 'Kemehlo', 'estelle', 20, 'Dev', 'rotating_card_profile1.png', 8547854),
      new Cv(3, 'Doe', 'Kevin', 20, 'Tech', '', 16516321)
    ];
  }

  getListCv() : Cv[] {
    return this.cvs;
  }

  getListCvsFromApi() : Observable<Cv[]> {
    return this.http.get<Cv[]>(APIS.cv);
  }

  getCvById(id : number) {
    return this.cvs.find(x => x.id == id);
  }

  getCvByIdFromApi(id : number) {
    return this.http.get<Cv>(APIS.cv + id);
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

  actualSelectedCv(cv : Cv) {
    console.log('Cv selectionné : ' + cv.firstname);
    this.selectCvSubject.next(cv);
  }

  addNewCvToApi(cv : Cv) {
   /*  const httpParams = new HttpParams().set('access_token', token); */
/*     const httpHeaders = new HttpHeaders().set('Authorization', localStorage.getItem('userToken'));
    return this.http.post(APIS.cv, cv, {headers: httpHeaders}); */
    return this.http.post(APIS.cv, cv);
  }

  deleteCvFromApi(id : number) {
/*     const httpHeaders = new HttpHeaders().set('Authorization', localStorage.getItem('userToken'));
    return this.http.delete(APIS.cv + id, {headers : httpHeaders} ); */
    return this.http.delete(APIS.cv + id);
  }
}
