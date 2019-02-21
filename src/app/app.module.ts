import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes creados por consola
import { GithubServeComponent } from './github-search/github-serve.component';
import { GithubResultsComponent } from './github-results/github-results.component';
import { PeticionGithubComponent } from './peticion-github/peticion-github.component';


//componentes material.angular.io
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

//modulos
import { HttpClientModule } from '@angular/common/http';
import { RoutingEjemploComponent } from './routing-ejemplo/routing-ejemplo.component';
import { GithubResultsDetailsComponent } from './github-results/github-results-details/github-results-details.component';




@NgModule({
  declarations: [
    AppComponent,
    GithubServeComponent,
    GithubResultsComponent,
    PeticionGithubComponent,
    RoutingEjemploComponent,
    GithubResultsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
