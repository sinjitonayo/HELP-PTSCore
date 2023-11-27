import { Injectable } from "@angular/core"
import { MerchantData } from "src/app/interfaces/register-merchant"

@Injectable({
  providedIn: "root",
})
export class MinistryManageModalService {
  selectedMerchant: MerchantData | null = null
  constructor() {}
  showDialog(merchant: MerchantData): void {
    let dialog = document.getElementById("dialog")
    dialog?.classList.remove("hidden")
    dialog?.classList.add("flex")

    setTimeout(() => {
      dialog?.classList.add("opacity-100")
    }, 20)

    this.selectedMerchant = this.getSelectedMerchant()
    console.log(merchant)
  }

  hideDialog(): void {
    let dialog = document.getElementById("dialog")
    dialog?.classList.add("opacity-0")
    dialog?.classList.remove("opacity-100")
    setTimeout(() => {
      dialog?.classList.add("hidden")
      dialog?.classList.remove("flex")
    }, 500)
    console.log(this.selectedMerchant)
  }

  getSelectedMerchant(): MerchantData | null {
    return this.selectedMerchant;
  }
}
