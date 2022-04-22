import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent implements OnInit {

  constructor(public productservice: ProductService) { }

  ngOnInit(): void {
  }

}
