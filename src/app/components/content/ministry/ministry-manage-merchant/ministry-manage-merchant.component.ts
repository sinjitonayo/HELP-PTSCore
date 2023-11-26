import { Component } from '@angular/core';
import { MerchantData } from 'src/app/interfaces/register-merchant';

@Component({
  selector: 'app-ministry-manage-merchant',
  templateUrl: './ministry-manage-merchant.component.html',
  styleUrls: ['./ministry-manage-merchant.component.css']
})
export class MinistryManageMerchantComponent {
  merchantData: MerchantData[] = []
  filteredMerchants: MerchantData[] = []
  numberOfMerchant: number = this.merchantData.length
 
  ngOnInit(): void {
    this.retrieveMerchantData();
  }

  retrieveMerchantData() {
    const storedMerchants = localStorage.getItem("merchantRegistered");
    if (storedMerchants) {
      this.merchantData = JSON.parse(storedMerchants);
      this.numberOfMerchant = this.merchantData.length
    }
  }

  getPendingMerchantData() : number{
    this.filteredMerchants = this.merchantData.filter((merchant: MerchantData) => merchant.merchantStatus === 'pending')
    return this.filteredMerchants.length
  }
}
