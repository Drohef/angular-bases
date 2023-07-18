import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age: number = 29;
    
  public get capitalName():string {
    return this.name.toUpperCase();
  }
  
  heroeDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName ():void {
    this.name = 'Spiderman';
  }
  changeAge ():void {
    this.age = 16;
  }
  functionReset():void {
    this.name = 'ironman';
    this.age = 29;
  }
}
