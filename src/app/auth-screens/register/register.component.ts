import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonCol, IonRow, IonImg,IonLabel, IonCard,IonCardContent,IonCardHeader,
  IonCardTitle, IonInput,IonButton,IonCheckbox } from "@ionic/angular/standalone";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports:[IonContent,IonCol,IonRow,IonImg,IonLabel,IonCard,IonCardContent,IonCardHeader,IonCardTitle
    ,IonInput,IonButton,IonCheckbox
  ]
})
export class RegisterComponent  implements OnInit {
  private router = inject(Router);
  constructor() { }

  ngOnInit() {}

  backToHome(){
    this.router.navigate(['login']);
  }

}
