import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interior-category',
  templateUrl: './interior-category.component.html',
  styleUrls: ['./interior-category.component.scss']
})
export class InteriorCategoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onloadpage(n: string){
    this.router.navigate(['/interiorProduct',n])
  }
  




}
