import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

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
      message: "Download Successful",
      duration: 3000,
      color: "success",
      position: 'bottom',

  });
    toast.present();
  }
}
