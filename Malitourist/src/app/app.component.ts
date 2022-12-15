import { Component } from '@angular/core';
import { slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Malitourist';
}
