import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {
  }
  select(a){
  if(a == 'option1'){
    // alert('Trend analysis')
    this.routes.navigate(['Home/Analysis'])
  }else if(a == 'option2'){
    this.routes.navigate(['Home/Data'])
  }
  else if(a == 'option3'){
    this.routes.navigate(['Home/Options'])
  }
  }
}
