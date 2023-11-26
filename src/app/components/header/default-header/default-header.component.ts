import { Component, HostListener } from '@angular/core';
import { slideInOut, fadeInOut } from "src/app/animations"
import * as _ from "lodash"

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css'],
  animations: [slideInOut, fadeInOut]
})
export class DefaultHeaderComponent {
  isScrolled: boolean = false;
  isMenuClicked: boolean = false;
  IsDivVisible: boolean = false;
  iconName : string = 'logo-white';

  toggleMenu(){
    this.isMenuClicked = !this.isMenuClicked;
  }

  @HostListener("window:scroll", [])
  onWindowScroll = _.throttle(() => {
    this.checkScroll()
  }, 200);

  checkScroll() {
    // Function to check scroll position and toggle visibility of the div
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 1) { // Example: Show div when scrolled 100px
      this.IsDivVisible = true;
      this.isScrolled = true;
      this.iconName = 'logo';
    } else {
      this.IsDivVisible = false;
      this.isScrolled = false;
      this.iconName = 'logo-white';
    }
  }
}
