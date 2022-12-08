import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile6',
  templateUrl: './profile6.page.html',
  styleUrls: ['./profile6.page.scss'],
})
export class Profile6Page implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }
  masterlist()
  {
  this.router.navigate(['masterlist'])
  }

}
