import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  constructor() { }

  SwalNotifSuccess(status: string, message: string){
    Swal.fire({
      position: "top",
      title: status,
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  SwalNotifFailed(status: string, message: string){
    Swal.fire({
      position: "top",
      title: status,
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  SwalNotifTopRight(status: string, message: string){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
