import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {

  frase: string = '';
  vocales: number = 0;
  consonantes: number = 0;
  palindromo: string = '';

  listaVocales: string[] = [
    'a', 'e', 'i', 'o', 'u',
    'A', 'E', 'I', 'O', 'U'
  ];

  listaConsonantes: string[] = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z',
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
  ];

 calcular(): void {

  this.vocales = 0;
  this.consonantes = 0;

  let textoLimpio: string = '';
  let textoInvertido: string = ''; 

  for (let i = 0; i < this.frase.length; i++) {

    let letra = this.frase[i];

    for (let j = 0; j < this.listaVocales.length; j++) {
      if (letra == this.listaVocales[j]) {
        this.vocales++;
      }
    }

    for (let j = 0; j < this.listaConsonantes.length; j++) {
      if (letra == this.listaConsonantes[j]) {
        this.consonantes++;
      }
    }

    if (letra != ' ') {
      textoLimpio = textoLimpio + letra;
      textoInvertido = letra + textoInvertido;
    }
  }

  if (textoLimpio == textoInvertido) {
    this.palindromo = 'Si es palíndromo';
  }
  else {
    this.palindromo = 'No es palíndromo';
  }
}
}