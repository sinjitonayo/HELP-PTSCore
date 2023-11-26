import { Component } from '@angular/core';

@Component({
  selector: 'app-ministry-review',
  templateUrl: './ministry-review.component.html',
  styleUrls: ['./ministry-review.component.css']
})
export class MinistryReviewComponent {
  loader: boolean = true

  ngOnInit() {
    setTimeout(() => {
      this.loader = false
    }, 500)
  }
}
