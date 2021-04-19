import { Injectable } from '@angular/core';
import Swall, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // metodo de alerta de sucesso
  public sucess(message: string, title: string): void {
    this.showAlert(title, message, 'success');
  }

  // metodo de alerta de info
  public info(message: string, title: string): void {
    this.showAlert(title, message, 'info');
  }

  // metodo de alerta de sucesso
  public error(message: string, title: string): void {
    this.showAlert(title, message, 'error');
  }

  // metodo para relaizar alertas
  private showAlert(title: string, message: string, icon: SweetAlertIcon):void{
    // o Swall chama o alerta da aplicação
    Swall.fire(title, message, icon);
  }
}
