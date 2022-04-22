import { ReturnStatement } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent implements OnInit, OnDestroy{
  user!: {name: number };
  paramsSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private router: Router,public productservice: ProductService) { }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name']
    }    
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params)=>{
        this.user.name= params['name'];
      }
    )
  }
  productlist(id: number){
    const product = this.productservice.product.filter(
      s=>{
        return (s.Id) ===(id);
      }
    )
    return product;
  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe(); 
  }
}
