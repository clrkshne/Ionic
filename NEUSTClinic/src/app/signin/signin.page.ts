import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor (private router:Router) { }

  ngOnInit() {
  }
  async home() 
  {
   this.router.navigate(['home'])
  }
}
