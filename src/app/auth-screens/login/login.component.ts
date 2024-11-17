import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonList, IonSegment, IonSegmentButton, IonLabel } from "@ionic/angular/standalone";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss'],
  imports: [IonLabel, IonSegmentButton, IonSegment, IonList, IonContent,IonList,IonSegment],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent  implements OnInit {
  segmentValue = '1';
  private router = inject(Router);
  constructor() { }

  ngOnInit() {}


  goToRegister(){
    this.router.navigate(['login/register']);
  }
}
