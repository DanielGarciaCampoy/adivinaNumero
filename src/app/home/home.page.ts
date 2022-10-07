import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num:number;
  mayorMenor = "...";

  constructor() {}

  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }
  
  numSecreto: number = this.numAleatorio(0,100);

  compruebaNumero(){
    if(this.num)
    {
      if(this.numSecreto < this.num)
      {
        this.mayorMenor = 'mayor que';
      }
      else if(this.numSecreto > this.num)
      {
        this.mayorMenor = 'menor que';
      }
      else{
        this.mayorMenor = '';
      }
    }
  }

}
