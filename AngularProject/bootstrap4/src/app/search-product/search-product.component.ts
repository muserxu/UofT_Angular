import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  productId : number;
  productDescriptionEnglish: string;
  message: string;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  search(){
    this.productService.getProducts(this.productId, this.productDescriptionEnglish).subscribe((data:any) => {
      if (!data){
        this.products = [] 
      }
      else if (!data.length){
        this.products = [];
        this.products.push(data);
      }
      else{
        if (this.productDescriptionEnglish){
          let found:boolean = false;
          this.products = [];
          for(let i:number =0; i<data.length; ++i){
            if (data[i].productDescriptionEnglish.toUpperCase() == this.productDescriptionEnglish.toUpperCase()){
              this.products.push(data[i]);
              found = true;
            }
          }
          if (!found){
            alert('Cant Find Product based on description, displaying all products')
            this.products = <Product[]> data;
          }


        }else{
          this.products = <Product[]> data;
        }
        
      }
  
      console.log(this.products);
    }, (err: any)=>{
      console.log(err.status);
      this.products = []
    })
  }

}
