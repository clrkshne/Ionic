import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(private router:Router, private ToastController:ToastController) { }

  ngOnInit() {
  }
  admindashboard()
  {
    this.router.navigate(['admindashboard'])
  }
  masterlist()
  {
    this.router.navigate(['masterlist'])
  }
  verification()
  {
    this.router.navigate(['verification'])
  }
  reports()
  {
    this.router.navigate(['reports'])
  }
  adminsignin()
  {
    this.router.navigate(['adminsignin'])
  }
  async success()
  {
    const toast = await this.ToastController.create({
      message: "Registration approved!",
      duration: 3000,
      color: "success",
      position: 'bottom',

  });
    toast.present();
  }
  async success2()
  {
    const toast = await this.ToastController.create({
      message: "Registration denied!",
      duration: 3000,
      color: "danger",
      position: 'bottom',

  });
    toast.present();
  }
}
