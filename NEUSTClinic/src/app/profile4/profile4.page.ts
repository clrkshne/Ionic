import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile4',
  templateUrl: './profile4.page.html',
  styleUrls: ['./profile4.page.scss'],
})
export class Profile4Page implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }
  masterlist()
  {
  this.router.navigate(['masterlist'])
  }
}
