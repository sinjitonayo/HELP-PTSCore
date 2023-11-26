import { Component } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-ministry-sidebar",
  templateUrl: "./ministry-sidebar.component.html",
  styleUrls: ["./ministry-sidebar.component.css"],
})
export class MinistrySidebarComponent {
  isDashboardShown: boolean = false
  isReviewMerchant: boolean = false
  isAnalytics: boolean = false
  constructor(private router: Router) {}
  logout() {
    this.router.navigate(["login"])
  }
  setActive(link: string): void {
    // Set the flag for the clicked link
    if (link === "dashboard") {
      this.isDashboardShown = true
      this.isReviewMerchant = false
      this.isAnalytics = false
    } else if (link === "reviewMerchant") {
      this.isReviewMerchant = true
      this.isDashboardShown = false
      this.isAnalytics = false
    } else if (link === "analytics") {
      this.isAnalytics = true
      this.isDashboardShown = false
      this.isReviewMerchant = false
    }
  }
}
