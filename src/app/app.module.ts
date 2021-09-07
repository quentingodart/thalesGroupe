import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
