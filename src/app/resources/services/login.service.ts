import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Ejetado no construtor para que toda vex utilize a service, faça a requição para o servidor
  constructor(private httpClient: HttpClient) { }

  // método para receber o atributo de requisição 
  // O observable é a resposta que ele vai fazer
  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin);
  }
}
