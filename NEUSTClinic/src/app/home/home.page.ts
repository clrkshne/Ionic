import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

adminsignin()
{
  this.router.navigate(['adminsignin'])
}

signup()
{
  this.router.navigate(['signup'])
}

signin()
{
  this.router.navigate(['signin'])
}
}
