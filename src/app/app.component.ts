import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Capitán América';

  nombre = 'dAnIeL fErNaNdO yEpEz vElEz';

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje = 0.234;

  idioma = '';

  videoUrl = 'https://www.youtube.com/embed/4rWY_zMtdsE';

  salario = 1234.5;

  heroe: object = {
    nombre: 'Logan',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };

  valorPromesa: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Llego La Data Desde La Promesa');
    }, 4000);
  });

  fecha: Date = new Date();
}
