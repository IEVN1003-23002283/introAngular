import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {

  figura:string=''
  valor1:string=''
  valor2:string=''
  resultado:number=0

  calcular():void{

    if(this.figura=='Rectangulo'){
      this.resultado=parseInt(this.valor1)*parseInt(this.valor2)
    }

    if(this.figura=='Cuadrado'){
      this.resultado=parseInt(this.valor1)*parseInt(this.valor1)
    }

    if(this.figura=='Triangulo'){
      this.resultado=(parseInt(this.valor1)*parseInt(this.valor2))/2
    }

    if(this.figura=='Circulo'){
      this.resultado=Math.PI*parseInt(this.valor1)*parseInt(this.valor1)
    }

   if(this.figura=='Pentagono'){
  this.resultado=(5*parseInt(this.valor1)*parseInt(this.valor2))/2
}
  }
}