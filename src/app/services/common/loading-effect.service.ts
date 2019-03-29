import { Injectable } from '@angular/core';
import { TdLoadingService, LoadingMode, LoadingType } from '@covalent/core/loading';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LoadingEffectService {
  constructor(private loadingService: TdLoadingService) {
    this.loadingService.create({
      name: 'loading',
      mode: LoadingMode.Indeterminate,
      type: LoadingType.Circular,
      color: 'warn',
    });
   }

  showLoading(){
    this.loadingService.register('loading');
  }
  
  stopLoading(){
    this.loadingService.resolve('loading');
  }
}
