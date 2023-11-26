import { Component } from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  loader: boolean = true

  ngOnInit() {
    setTimeout(() => {
      this.loader = false
    }, 1000)
  }
}
