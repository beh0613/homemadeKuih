import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule],  // Ensure IonicModule is imported!
  templateUrl: 'app.component.html',
  schemas: []
})
export class AppComponent {
  constructor() {}
}
