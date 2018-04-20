import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customJson'
})
export class CustomJsonPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let str = '';
    console.log('CustomJsonPipe');
    console.log(JSON.parse(value)[0]);

    const arrList = JSON.parse(value);

    // tslint:disable-next-line:forin
    for (const key in arrList) {
      console.log(key);
      str += arrList[key].value + ', ';
    }
    return str;
  }

}
