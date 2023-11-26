import { Component } from '@angular/core';
import { slideInOut, fadeInOut } from "src/app/animations"

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [slideInOut, fadeInOut],
  standalone: true
})
export class LoaderComponent {

}
