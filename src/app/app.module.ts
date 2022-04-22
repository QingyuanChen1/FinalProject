import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { FormsModule } from '@angular/forms';
import { InteriorproductComponent } from './interiorproduct/interiorproduct.component';
import { InteriorCategoryComponent } from './interior-category/interior-category.component';
import { Routes,RouterModule } from '@angular/router';
import { InteriorComponent } from './interiorproduct/interior/interior.component';
import { CategoriesComponent } from './interior-category/categories/categories.component';



const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'allproduct',component: AllproductComponent},
  {path: 'navigation',component: NavigationComponent},
  {
    path: 'interiorCategory',component: InteriorCategoryComponent,
    children:[{
      path:':id', component:CategoriesComponent
    }]
  },
  {
    path: 'interiorProduct',component: InteriorproductComponent,
    children:[{
      path:':name', component:InteriorComponent
    }]
  }
  // {path: 'interiorCategory',component: InteriorCategoryComponent},
  // {path: 'interiorCategory/:id',component:CategoriesComponent},
  // {path: 'interiorProduct',component: InteriorproductComponent},
  // {path: 'interiorProduct/:name',component: InteriorComponent}
]
@NgModule({
  declarations: [                                                                                                                                                                                                                                                                                             
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AllproductComponent,
    InteriorproductComponent,
    InteriorCategoryComponent,
    InteriorComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
