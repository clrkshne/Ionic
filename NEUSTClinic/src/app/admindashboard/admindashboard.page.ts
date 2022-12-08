import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.page.html',
  styleUrls: ['./admindashboard.page.scss'],
})
export class AdmindashboardPage implements OnInit {

  constructor( private router:Router, private ToastController:ToastController) { }

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
  profile6()
  {
    this.router.navigate(['profile6'])
  }
  profile4()
  {
    this.router.navigate(['profile4'])
  }
  medcert()
  {
    this.router.navigate(['medcert'])
  } 
    async download()
  {
    const toast = await this.ToastController.create({
      message: "Downloaded Successfully",
      duration: 3000,
      color: "success",
      position: 'top',

  });
    toast.present();
  }
  async print()
  {
    const toast = await this.ToastController.create({
      message: "Printed Successfully",
      duration: 3000,
      color: "success",
      position: 'top',

  });
    toast.present();
  }
}
