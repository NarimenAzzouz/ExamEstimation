import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    ListAnnonceComponent,
    EstimationCoutComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
