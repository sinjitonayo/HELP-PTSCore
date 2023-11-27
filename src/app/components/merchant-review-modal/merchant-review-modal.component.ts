import { Component } from "@angular/core"
import { MinistryManageModalService } from "src/app/services/ministry-manage-modal.service"
import { MerchantData } from 'src/app/interfaces/register-merchant';

@Component({
  selector: "app-merchant-review-modal",
  templateUrl: "./merchant-review-modal.component.html",
  styleUrls: ["./merchant-review-modal.component.css"],
})
export class MerchantReviewModalComponent {
  selectedMerchant: MerchantData | null = null
  constructor(private modal: MinistryManageModalService) {}

  ngOnInit(): void {
    this.selectedMerchant = this.modal.getSelectedMerchant();
  }
  
  closeModal(): void {
    this.modal.hideDialog()
    console.log(this.selectedMerchant)
  }
}
