import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  currentNumber:number = 0;

  @Output() startEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    
    this.interval = setInterval(() => {
        this.currentNumber = this.currentNumber + 1;
        console.log(this.currentNumber);
        this.startEvent.emit(this.currentNumber);
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

  

}
