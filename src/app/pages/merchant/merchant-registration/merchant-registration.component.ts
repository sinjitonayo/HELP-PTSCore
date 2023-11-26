import { Component } from '@angular/core';

@Component({
  selector: 'app-merchant-registration',
  templateUrl: './merchant-registration.component.html',
  styleUrls: ['./merchant-registration.component.css']
})
export class MerchantRegistrationComponent {
  loader: boolean = true

  ngOnInit() {
    setTimeout(() => {
      this.loader = false
    }, 500)
  }
}
