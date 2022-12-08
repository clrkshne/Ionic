import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-medcert',
  templateUrl: './medcert.page.html',
  styleUrls: ['./medcert.page.scss'],
})
export class MedcertPage implements OnInit {

  constructor(private router:Router, private ToastController:ToastController) { }

  ngOnInit() {
  }

  admindashboard()
  {
    this.router.navigate(['admindashboard'])
  }

  async success()
  {
    const toast = await this.ToastController.create({
      message: "Medical Certificate Printed",
      duration: 3000,
      color: "success",
      position: 'top',

  });
    toast.present();
  }

}
