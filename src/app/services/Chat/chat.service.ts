import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from './Response';





@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiServerUrl=environment.apiBaseUrl

  constructor(private http: HttpClient) {

   }

   chat(message: string) :Observable<Response>{
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7
    };

    return this.http.post<Response>('http://localhost:8080/api/v1/bot/send', body);

  }


}
