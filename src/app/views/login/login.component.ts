import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // declarando uma variavel que passa a classe da requisição do login
  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService, private alertService: AlertService) { }

  // primeiro método que o Angular invoca assim que o componente for construido
  ngOnInit(): void {
    // variavel inicializada
    this.requestLogin = new RequestLogin();
  }

  // método para o html acessar ao clicar no botão de entrar
  public doLogin() :void{
    // passado o doLogin
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
        this.alertService.info('','Funcionalidade ainda não implementada!');
    },
    (httpError) => {
      this.alertService.error('',httpError.error.message)
    });
  }
}
