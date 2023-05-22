import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'useEnumValue',
})
export class UseEnumValuePipe implements PipeTransform {
  transform(value: any, args?: any): EnumModel[] {
    let keys: EnumModel[] = [];
    for (let enumMember in value) {
      if (!isNaN(parseInt(enumMember, 10))) {
        keys.push({ key: enumMember, value: value[enumMember] });
      }
    }
    return keys;
  }
}

export interface EnumModel {
  key: any;
  value: any;
}
