import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  canDisplayHeader(){
    return !this.router.url?.includes('home');
  }

  navigateTo(route:string){
    this.router.navigate([route]);
  }

  navigateToPage(route:string){
    this.router.navigate([route])
  }

  

}
