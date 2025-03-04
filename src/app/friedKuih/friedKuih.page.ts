import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, 
  IonFooter, IonList, IonItem, IonLabel, IonCard, IonCardContent, 
  IonCardTitle, IonGrid, IonRow, IonCol 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friedKuih',
  templateUrl: './friedKuih.page.html',
  styleUrls: ['./friedKuih.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, 
    IonFooter, IonList, IonItem, IonLabel, IonCard, IonCardContent, 
    IonCardTitle, IonGrid, IonRow, IonCol
  ]
})
export class FriedKuihPage {
  kuihs = [
    
    {
      steamkuih_engName: "Cucur Badak",
      steamkuih_price: 1.00,
      image: "assets/Cucukpadak.webp"
    },
    {
      steamkuih_engName: "Fried Tapioca",
      steamkuih_chineseName: "炸木薯糕",
      steamkuih_price: 0.70,
      image: "assets/FriedTapioca.webp"
    },
    {
      steamkuih_engName: "Kuih Talam",
      steamkuih_chineseName: "斑兰达兰糕",
      steamkuih_price: 0.70,
      image: "assets/Kuih-Talam.jpg"
    },
    {
      steamkuih_engName: "Kuih Lapis",
      steamkuih_chineseName: "九层糕",
      steamkuih_price: 0.70,
      image: "assets/KuihLapis.webp"
    },
    {
      steamkuih_engName: "Kuih Taya",
      steamkuih_chineseName: "斑斓椰丝卷",
      steamkuih_price: 0.70,
      image: "assets/KuihTaya.webp"
    },
    {
      steamkuih_engName: "Pulut Inti",
      steamkuih_chineseName: "椰丝糯米糕",
      steamkuih_price: 1.00,
      image: "assets/Pulut_inti.webp"
    },
    {
      steamkuih_engName: "Kuih Seri Muka",
      steamkuih_chineseName: "斑斓糯米糕",
      steamkuih_price: 0.70,
      image: "assets/serimuka.webp"
    },
    {
      steamkuih_engName: "Kuih Kosui",
      steamkuih_chineseName: "杯子糕",
      steamkuih_price: 0.70,
      image: "assets/kosui.webp"
    },
    {
      steamkuih_engName: "Teochew Peach Shaped Kuih",
      steamkuih_chineseName: "桃糕",
      steamkuih_price: 1.20,
      image: "assets/teochew.webp"
    },
    {
      steamkuih_engName: "Mochi",
      steamkuih_chineseName: "白粉糕",
      steamkuih_price: 0.80,
      image: "assets/mochi.webp"
    },
    {
      steamkuih_engName: "White Sugar Sponge Cake",
      steamkuih_chineseName: "白糖糕",
      steamkuih_price: 0.70,
      image: "assets/whitesugar.webp"
    },
    {
      steamkuih_engName: "Glutinous Rice",
      steamkuih_chineseName: "糯米糕",
      steamkuih_price: 0.80,
      image: "assets/glutinousrice.webp"
    },
    {
      steamkuih_engName: "Ang Ku Kuih",
      steamkuih_chineseName: "红龟",
      steamkuih_price: 1.00,
      image: "assets/angku.webp"
    },
    {
      steamkuih_engName: "Yam Kuih",
      steamkuih_chineseName: "芋头糕",
      steamkuih_price: 0.80,
      image: "assets/yam.webp"
    }
  ];
   constructor(private router: Router) {}
    
      navigateTo(page: string) {
        console.log(`Navigating to: ${page}`); // ✅ Check console for this log
        this.router.navigate([page]); // Uses Angular Router for navigation
}
}