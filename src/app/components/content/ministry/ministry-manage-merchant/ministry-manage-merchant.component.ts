import { Component } from '@angular/core';
import { MerchantData } from 'src/app/interfaces/register-merchant';
import { MinistryManageModalService } from 'src/app/services/ministry-manage-modal.service';

@Component({
  selector: 'app-ministry-manage-merchant',
  templateUrl: './ministry-manage-merchant.component.html',
  styleUrls: ['./ministry-manage-merchant.component.css']
})
export class MinistryManageMerchantComponent {
  merchantData: MerchantData[] = []
 
  constructor(private modal: MinistryManageModalService){}
  ngOnInit(): void {
    this.retrieveMerchantData();
  }

  retrieveMerchantData() {
    const storedMerchants = localStorage.getItem("merchantRegistered");
    if (storedMerchants) {
      this.merchantData = JSON.parse(storedMerchants);
    }
  }

  openModal(merchant: any){
    this.modal.showDialog(merchant)
  }

 

}
