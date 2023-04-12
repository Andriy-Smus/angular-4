import { Pipe, PipeTransform } from '@angular/core';
import { MyPhoneBook } from './phone-book.component'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrPhoneBook: MyPhoneBook[], sort: string): MyPhoneBook[] {
    if(!arrPhoneBook) return [];
    if(!sort) return arrPhoneBook;
    if(sort === 'firstAsc') {
      return arrPhoneBook.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    }
    if(sort === 'firstDesc'){
      return arrPhoneBook.sort((a, b) => (a.firstName < b.firstName) ?  1 : ((a.firstName > b.firstName) ? -1 : 0))
    }
    if(sort === 'lastAsc') {
      return arrPhoneBook.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
    }
    if(sort === 'lastDesc'){
      return arrPhoneBook.sort((a, b) => (a.lastName < b.lastName) ?  1 : ((a.lastName > b.lastName) ? -1 : 0))
    }
    if(sort === 'numberAsc') {
      return arrPhoneBook.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0))
    }
    return arrPhoneBook.sort((a, b) => (a.number < b.number) ?  1 : ((a.number > b.number) ? -1 : 0))
  }


}
