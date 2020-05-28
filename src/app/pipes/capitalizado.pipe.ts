import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLowerCase();
    let nombres: string[] = value.split(' ');

    if (todas) {
      nombres = nombres.map((name) => {
        return name[0].toUpperCase() + name.substr(1);
      });

      console.log(nombres);
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' ');
  }
}
