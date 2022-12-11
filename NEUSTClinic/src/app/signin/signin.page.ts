import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor (private router:Router, private ToastController:ToastController) { }

  ngOnInit() {
  }
  async home() 
  {
   this.router.navigate(['home'])
  }
  async update()
  {
    const toast = await this.ToastController.create({
      message: "Updated Successfully",
      duration: 3000,
      color: "success",
      position:'bottom',

  });
    toast.present();
  }
  
}
