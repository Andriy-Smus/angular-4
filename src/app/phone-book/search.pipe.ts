import { Pipe, PipeTransform } from '@angular/core';
import { MyPhoneBook } from './phone-book.component'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrPhoneBook: MyPhoneBook[], field: string): MyPhoneBook[] {
    if(!arrPhoneBook) return [];
    if(!field) return arrPhoneBook;
    return arrPhoneBook.filter(name => name.number.toLowerCase().includes(field.toLowerCase()) || name.firstName.toLowerCase().includes(field.toLowerCase()));
  }
}
