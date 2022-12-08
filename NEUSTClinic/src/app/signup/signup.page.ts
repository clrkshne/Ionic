import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private ToastController:ToastController
  ) {}

  ngOnInit() {
  }



  async success()
  {
    const toast = await this.ToastController.create({
      message: "You have successfully signed up!",
      duration: 3000,
      color: "success",
      position: 'top',

  });
    toast.present();
  }
}
