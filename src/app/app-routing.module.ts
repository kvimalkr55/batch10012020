import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { DirectivesComponent } from './directives/directives.component';
import { TypescComponent } from './typesc/typesc.component'
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'



const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'typescript', component: TypescComponent},
  {path: 'forms', component:  ReactiveFormsComponent},
 
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
