import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-masterlist',
  templateUrl: './masterlist.page.html',
  styleUrls: ['./masterlist.page.scss'],
})
export class MasterlistPage implements OnInit {

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
  profile()
  {
    this.router.navigate(['profile'])
  }
  profile2()
  {
    this.router.navigate(['profile2'])
  }
  profile3()
  {
    this.router.navigate(['profile3'])
  }
  profile4()
  {
    this.router.navigate(['profile4'])
  }
  profile5()
  {
    this.router.navigate(['profile5'])
  }
  profile6()
  {
    this.router.navigate(['profile6'])
  }
  
}
