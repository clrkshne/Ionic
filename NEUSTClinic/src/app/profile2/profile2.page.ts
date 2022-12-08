import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.page.html',
  styleUrls: ['./profile2.page.scss'],
})
export class Profile2Page implements OnInit {

  constructor(private router:Router) {}
  
    ngOnInit() {
    }
    masterlist()
    {
      this.router.navigate(['masterlist'])
    }
}
