import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public namesHeroes:string [] = ['spiderman', 'thor', 'hulk', 'deadpool', 'ironman'];
  public deleteHeroe?: string;

  removeLastHeroe ():void {
    this.deleteHeroe = this.namesHeroes.pop();
    this.namesHeroes.pop();
  }
}
