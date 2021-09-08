import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './component/color/color.component';
import { CarteDeVisiteComponent } from './component/carte-de-visite/carte-de-visite.component';
import { PereComponent } from './component/pere/pere.component';
import { FilsComponent } from './component/fils/fils.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { CvComponent } from './cv/cv/cv.component';
import { CardDetailComponent } from './cv/card-detail/card-detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { CustomizeTextComponent } from './component/customize-text/customize-text.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterSimulatorComponent } from './component/router-simulator/router-simulator.component';
import { EmbaucheComponent } from './embauche/embauche/embauche.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { FrontComponent } from './templates/front/front.component';
import { BackComponent } from './templates/back/back.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TestFormComponent } from './component/form/test-form/test-form.component';
import { LoginComponent } from './component/login/login.component';
import { NonStopImageComponent } from './component/observable/non-stop-image/non-stop-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CarteDeVisiteComponent,
    PereComponent,
    FilsComponent,
    ItemComponent,
    ListComponent,
    CvComponent,
    CardDetailComponent,
    NgStyleComponent,
    CustomizeTextComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoListComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    EmbaucheComponent,
    DetailCvComponent,
    FrontComponent,
    BackComponent,
    NotFoundComponent,
    TestFormComponent,
    LoginComponent,
    NonStopImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
