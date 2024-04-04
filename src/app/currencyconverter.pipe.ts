import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {

  transform(value: number, exchangeRate: number): number {
    if (isNaN(value) || isNaN(exchangeRate)) return value;
    return value * exchangeRate;
  }

}
