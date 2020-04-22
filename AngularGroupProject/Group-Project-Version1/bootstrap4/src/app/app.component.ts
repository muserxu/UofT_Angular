import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap4';
  currentNumber = 0;
  oddNumbers : number[] = [];
  evenNumbers : number[] = [];
  
  receiveNumber($event){
    this.currentNumber = $event;
    if (this.currentNumber%2 == 1){
      this.oddNumbers.push(this.currentNumber);
    }
    else{
      this.evenNumbers.push(this.currentNumber);
    }
  }
}
