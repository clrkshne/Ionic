import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile5',
  templateUrl: './profile5.page.html',
  styleUrls: ['./profile5.page.scss'],
})
export class Profile5Page implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }
  masterlist()
  {
  this.router.navigate(['masterlist'])
  }

}
