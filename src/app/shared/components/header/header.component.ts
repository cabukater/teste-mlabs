import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username ="Anselmo Carlos"
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
 goToHome(){
  this.router.navigate(['home']);
 }
}
