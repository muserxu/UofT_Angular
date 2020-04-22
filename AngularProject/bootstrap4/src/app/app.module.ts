import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { HttpClientModule} from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    // ServerComponent,
    // ServersComponent,
    HomeComponent,
    AddProductComponent,
    SearchProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
