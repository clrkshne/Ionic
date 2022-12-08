import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.page.html',
  styleUrls: ['./profile2.page.scss'],
})
export class Profile2Page implements OnInit {

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
