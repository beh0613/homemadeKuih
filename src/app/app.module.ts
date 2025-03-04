import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule // 👈 Ensure this is imported here!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
