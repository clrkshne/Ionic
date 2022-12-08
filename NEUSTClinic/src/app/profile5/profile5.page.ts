import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-profile5',
  templateUrl: './profile5.page.html',
  styleUrls: ['./profile5.page.scss'],
})
export class Profile5Page implements OnInit {

  constructor(private router:Router, private ToastController:ToastController) {}

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
      position: 'top',

  });
    toast.present();
  }

}
