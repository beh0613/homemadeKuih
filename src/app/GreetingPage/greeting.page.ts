import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.page.html',
  styleUrls: ['./greeting.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class GreetingPage {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Greeting Page Loaded'); // Debugging log

    setTimeout(() => {
      console.log('Redirecting to rolePage'); // Debugging log
      this.router.navigate(['rolepage']); // Redirect to mainpage after 5 seconds
    }, 5000);
  }
}
