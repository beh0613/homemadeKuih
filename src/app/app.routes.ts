import { RouterModule,Routes } from '@angular/router';
import { GreetingPage } from './GreetingPage/greeting.page';
import { MainPage } from './MainPage/main.page';
import { rolePage } from './rolePage/role.page';   // Changed to PascalCase
import { CustomerMainPage } from './customerMain/customerMain.page'; // Changed to PascalCase
import { FriedKuihPage } from './friedKuih/friedKuih.page'; // Changed to PascalCase
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },  // Default route
  { path: 'greeting', component: GreetingPage },            // Greeting Page
  { path: 'mainpage', component: MainPage },                // Main Page
  { path: 'rolepage', component: rolePage },                // Role Page
  { path: 'customerMain', component: CustomerMainPage  },     // Customer Main Page
  { path: 'friedKuih', component: FriedKuihPage  }     // Customer Main Page

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // ✅ Ensure this is here
  exports: [RouterModule]
})
export class AppRoutingModule {}