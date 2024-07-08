import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:'',component:AnnonceComponent},
  {path:'list',component:ListAnnonceComponent},
  {path:'estimation',component:EstimationCoutComponent},
  {path:'page',component:PageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
