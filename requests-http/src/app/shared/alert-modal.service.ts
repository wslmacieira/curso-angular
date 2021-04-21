import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  showAlert(message: string, type: string, dismissTimeout?: number): void {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string): void {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string): void {
    this.showAlert(message, AlertTypes.SUCCESS, 2000);
  }

  showConfirm(title: string, message: string, confirmTxt?: string, cancelTxt?: string): Subject<boolean> {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if (confirmTxt) {
      bsModalRef.content.confirmTxt = confirmTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (bsModalRef.content as ConfirmModalComponent).confirmResult;
  }

}
