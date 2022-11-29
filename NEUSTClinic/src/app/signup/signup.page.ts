import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private router:Router, private ToastController:ToastController
  ) {}

  ngOnInit() {
  }



  async success()
  {
    const toast = await this.ToastController.create({
      message: "You have successfully signed up! Please wait for your approval by the administrator.",
      duration: 3000,
      color: "success",
      position: 'bottom',

  });
    toast.present();
  }
}
