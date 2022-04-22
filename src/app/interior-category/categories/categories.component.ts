import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})


export class CategoriesComponent implements OnInit,OnDestroy{
  user!: {id: string};
  paramsSubscription!: Subscription;
  constructor(private route:ActivatedRoute,public productservice: ProductService,private router: Router) { }
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id']
    }
    
   this.paramsSubscription = this.route.params.subscribe(
      (params: Params)=>{
        this.user.id = params['id'];
      }
    );

  }

  productlist(category: string){
    const product = this.productservice.product.filter(
      s=>{
        return s.Category === category;
      }
    )
    return product;
  }



  ngOnDestroy(){
      this.paramsSubscription.unsubscribe();
  }
}
