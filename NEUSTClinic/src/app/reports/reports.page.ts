import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor(private router:Router) { }

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
}
