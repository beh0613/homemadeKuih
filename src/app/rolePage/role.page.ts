import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolePage',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton]
})
export class rolePage {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    console.log(`Navigating to: ${page}`); // ✅ Check console for this log
    this.router.navigate([page]); // Uses Angular Router for navigation
  }
}
