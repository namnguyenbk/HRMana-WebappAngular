import { Injectable } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor( private dialogService : TdDialogService) { }

  openAlert(message): void {
    this.dialogService.openAlert({
      message: message,
      disableClose: true || false, // defaults to false
      // viewContainerRef: ViewContainerRef, //OPTIONAL
      title: 'Thông báo!', //OPTIONAL, hides if not provided
      closeButton: 'Đóng', //OPTIONAL, defaults to 'CLOSE'
      width: '450px', //OPTIONAL, defaults to 400px
    });
  }

  openPrompt(title, message) {
    return this.dialogService.openPrompt({
      message: message,
      disableClose: true || false, // defaults to false
      // viewContainerRef: this.viewContainerRef, //OPTIONAL
      title: title, //OPTIONAL, hides if not provided
      value: '', //OPTIONAL
      cancelButton: 'Huỷ', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Đồng ý', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
    });
  }

}
