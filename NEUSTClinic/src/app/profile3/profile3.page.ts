import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile3',
  templateUrl: './profile3.page.html',
  styleUrls: ['./profile3.page.scss'],
})
export class Profile3Page implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }
  masterlist()
  {
  this.router.navigate(['masterlist'])
  }
}
