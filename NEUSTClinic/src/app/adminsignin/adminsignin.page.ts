import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.page.html',
  styleUrls: ['./adminsignin.page.scss'],
})
export class AdminsigninPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  admindashboard()
  {
    this.router.navigate(['admindashboard'])
  }
  home()
  {
    this.router.navigate(['home'])
  }
}
