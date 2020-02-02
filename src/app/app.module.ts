import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DirectivesComponent } from './directives/directives.component';
import {HttpClientModule} from '@angular/common/http';
import { TypescComponent } from './typesc/typesc.component';
import { ChangeTextColorDirective } from './change-text-color.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrComponent } from './template-dr/template-dr.component';
import { MyuppercasePipe } from './myuppercase.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    PagenotfoundComponent,
    DirectivesComponent,
    TypescComponent,
    ChangeTextColorDirective,
    ReactiveFormsComponent,
    TemplateDrComponent,
    MyuppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
