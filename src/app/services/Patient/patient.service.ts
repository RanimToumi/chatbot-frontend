import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient} from './Patient';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/patient/all`);
  }

  //envoyer une requête POST HTTP à l'URL spécifiée en utilisant la méthode post de l'objet http d'Angular
  //la méthode retourne un objet Observable qui nous permet de souscrire à une réponse HTTP une fois que celle-ci sera disponible.
  
  public addPatient(patient: Patient): Observable<Patient[]> {
    return this.http.post<Patient[]>(`${this.apiServerUrl}/patient/add`,patient);
  }


}
