import { ColorComponent } from './component/color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { FilsComponent } from './component/fils/fils.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path : "", redirectTo : 'cv', pathMatch : "full"},
  {path : "cv", component: CvComponent},
  {path : "cv/:id", component: DetailCvComponent},
  {path : "todo", component: TodoListComponent},
  {path : "login", component: LoginComponent},
  /* {path : "color", component: ColorComponent}, */
  {path : "color/:favoriteColor", component: ColorComponent},
  {path : "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
