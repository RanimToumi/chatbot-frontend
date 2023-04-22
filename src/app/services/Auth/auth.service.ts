import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, shareReplay, tap } from 'rxjs';
import { AuthResult } from './auth';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl=environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  //se connecter à l'API backend en envoyant les informations d'identification de l'utilisateur
  //Observable contenant le résultat de l'authentification.

  login(data:any) {

    return this.http.post(`${this.apiServerUrl}/auth/login`, data)
      // .pipe(
      //   tap(res => this.setSession(res)),
      //   shareReplay()
      // );
  }
  



  // stocker les informations d'authentification dans le stockage local (localStorage) du navigateur
  // en utilisant les clés id_token et expires_at.

  public setSession(authResult: AuthResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }
   //Renvoie un booléen qui indique si l'utilisateur est actuellement connecté ou non, en comparant la date et l'heure actuelles avec
   //la date d'expiration de la session stockée dans le stockage local (localStorage).
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
// renvoie un booléen qui indique si l'utilisateur est actuellement déconnecté,
// en utilisant la méthode isLoggedIn() pour vérifier s'il est connecté ou non.

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  /* localStorage.getItem("expires_at") can return either a
  string or null. The JSON.parse() method expects a string as
   its argument, but if localStorage.getItem("expires_at") returns null,
   you'll get this error. */


   //ette méthode renvoie la date d'expiration de la session stockée dans le stockage local (localStorage),
   //en lisant la valeur de la clé expires_at et en la convertissant en objet moment.
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = expiration ? JSON.parse(expiration) : null;
    return moment(expiresAt);

  }
}
