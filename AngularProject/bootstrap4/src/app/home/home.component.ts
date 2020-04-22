import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  availableProducts: number;
  unusedProducts: number;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title:{
      text: 'AvailableProducts'
    },
    series: [{
      type: 'pie'
    }],
    plotOptions:{
      pie:{
        colors:['orange', 'red'],
      } 
    },
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
    this.productService.getAvailableProducts()
      .subscribe((data:any) => {
        this.availableProducts = data.availableProducts;
        this.unusedProducts = data.unusedProducts;
        this.chartOptions = {
          series: [{
            data: [
              ['Available: '+ this. availableProducts, this. availableProducts], 
              ['Unused: '+ this.unusedProducts, this.unusedProducts]],
            type: 'pie'
          }]
        };
      });

    
  }
}
