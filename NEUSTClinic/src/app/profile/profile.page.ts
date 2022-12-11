import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router:Router,private ToastController:ToastController
  ) {}

  ngOnInit() {
  }
  masterlist()
  {
    this.router.navigate(['masterlist'])
  }
  async success()
  {
    const toast = await this.ToastController.create({
      message: "User update successfully",
      duration: 3000,
      color: "success",
      position: 'bottom',

  });
    toast.present();
  }
  
}
