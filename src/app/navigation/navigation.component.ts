import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( private router: Router) { }
  index: any = '';
  value= [{title: "Tvs",name:"/interiorCategory/Tvs"},{title:"Computers",name:"/interiorCategory/Computers"},{title:"Appliances",name:"/interiorCategory/Appliances"}]
  chosenType: string = '';
  ngOnInit(): void {
  }













  


}
