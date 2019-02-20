import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubServeComponent } from './github-search/github-serve.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  //generamos una ruta que se enlaza con nuestro componente, donde crearemos la etiqueta del enlace.
  //Ver componente para aclaración.
  {path: '', component: AppComponent},
  {path: 'routingEjemplo', component: GithubServeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
