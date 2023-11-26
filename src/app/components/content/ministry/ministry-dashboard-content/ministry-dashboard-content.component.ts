import { Component } from "@angular/core"
import { MerchantData } from "src/app/interfaces/register-merchant";

@Component({
  selector: "app-ministry-dashboard-content",
  templateUrl: "./ministry-dashboard-content.component.html",
  styleUrls: ["./ministry-dashboard-content.component.css"],
})
export class MinistryDashboardContentComponent {
  merchantData: MerchantData[] = []
  filteredMerchants: MerchantData[] = []
  numberOfMerchant: number = this.merchantData.length
  isDashboardShown : boolean = true
  isReviewMerchant : boolean = false
  isAnalyticsShown : boolean = false
 
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

  showDashboard(){
    this.isDashboardShown = true
    this.isReviewMerchant = false
    this.isAnalyticsShown = false
  }

  showReviewMerchant(){
    this.isDashboardShown = false
    this.isReviewMerchant = true
    this.isAnalyticsShown = false
  }

  showAnalytics(){
    this.isDashboardShown = false
    this.isReviewMerchant = false
    this.isAnalyticsShown = true
  }




}
