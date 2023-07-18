import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h1>Counter App</h1>
    <h3> Counter: {{counter}} </h3>

        <button (click)="incraseCounter(+1)">+1</button>
        <button (click)="resetCounter()">reset</button>
        <button (click)="incraseCounter(-1)">-1</button>
    
    `
})
export class counterComponent {
  public counter: number = 10;
  public constCounter: number = 10;

  incraseCounter(value:number):void {
    this.counter = this.counter + value;
  }
  resetCounter():void {
    this.counter = this.constCounter;
  }
}