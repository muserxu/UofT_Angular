import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl : String = environment.baseUrl;


  constructor(private httpClient: HttpClient) { }

  public getProducts(productID?:number, productDescriptionEnglish?:string){
    if (productID){
      return this.httpClient.get(`${this.baseUrl + 'product/'+ productID}`);
    }
    else{
      return this.httpClient.get(`${this.baseUrl + 'products'}`);
    }
  }


  create(product: Product) {
    this.httpClient.post<Product>(`${this.baseUrl}/product/create`, product).subscribe(data => {
      console.log(data);
    },
    error =>
    console.log('Could not create product.'));
    }
  
  getAvailableProducts(){
    return this.httpClient.get(`${this.baseUrl + 'availableProducts'}`);
  }
}
