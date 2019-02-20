import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//generamos servicio con ng g service <nombre-servicio>

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //declaramos argumento httpClient con nombre cualquiera para poder utilizarlo dentro de la clase
  constructor(private http:HttpClient) { }
  //creamos metodo que haga peticion a nuestra api
  peticion(){
    return this.http.get("https://api.github.com/");
  }
}
