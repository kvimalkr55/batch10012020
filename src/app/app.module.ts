import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { TypescComponent } from './typesc/typesc.component'

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
    TypescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
