import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.page.html',
  styleUrls: ['./admindashboard.page.scss'],
})
export class AdmindashboardPage implements OnInit {

  constructor( private router:Router) { }

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
}
