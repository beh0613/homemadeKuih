import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-MainPage',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class MainPage {
  constructor(private router: Router) {}

}
