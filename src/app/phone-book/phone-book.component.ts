import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent {

  public sortFirstNameAsc = false;
  public sortFirstNameDesc = false;
  public sortLastNameAsc = false;
  public sortLastNameDesc = false;
  public sortNumberAsc = false;
  public sortNumberDesc = false;
  public type = '';

  public field = '';

  public addStatus = false;
  public editStatus = false;
  public newFirstName = '';
  public newLastName = '';
  public newPhone = '';
  public phoneRegExp = /^\d{10}$/;
  public newObject!: any;
  
  public indexContact!: number;

  public phoneBook: MyPhoneBook[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      number: '0631111111'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0631222222'
    },
    {
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      number: '0633333333'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      number: '0635555555'
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      number: '0636666666'
    },
    {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      number: '0677777777'
    },
  ]

  changeSortFirstName(): void {
    this.sortLastNameAsc = false;
    this.sortLastNameDesc = false;
    this.sortNumberAsc = false;
    this.sortNumberDesc = false;
    this.sortFirstNameAsc = !this.sortFirstNameAsc
    if(this.sortFirstNameAsc === true) {
      this.type = 'firstAsc';
      this.sortFirstNameDesc = false;
    }
    else {
      this.type = 'firstDesc';
      this.sortFirstNameDesc = !this.sortFirstNameDesc;
    }
  }

  changeSortLastName(): void {
    this.sortFirstNameAsc = false;
    this.sortFirstNameDesc = false;
    this.sortNumberAsc = false;
    this.sortNumberDesc = false;
    this.sortLastNameAsc = !this.sortLastNameAsc
    if(this.sortLastNameAsc === true) {
      this.type = 'lastAsc';
      this.sortLastNameDesc = false;
    }
    else {
      this.sortLastNameDesc = true;
      this.type = 'lastDesc';
    }
  }

  changeSortNumber(): void {
    this.sortFirstNameAsc = false;
    this.sortFirstNameDesc = false;
    this.sortLastNameAsc = false;
    this.sortLastNameDesc = false;
    this.sortNumberAsc = !this.sortNumberAsc
    if(this.sortNumberAsc === true) {
      this.type = 'numberAsc';
      this.sortNumberDesc = false;
    }
    else {
      this.sortNumberDesc = true;
      this.type = 'numberDesc';
    }
  }

  createNewContact(): void {
    this.addStatus = true;
  }

  close(): void {
    this.addStatus = false;
  }
  addNewContact(): void {
    console.log('1')
    if(this.editStatus === true){
    console.log('2')
      if(this.newFirstName !== '' && this.newLastName !== '' && this.phoneRegExp.test(this.newPhone)){
        this.phoneBook[this.indexContact].firstName = this.newFirstName;
        this.phoneBook[this.indexContact].lastName = this.newLastName;
        this.phoneBook[this.indexContact].number = this.newPhone;
        this.newFirstName = '';
        this.newPhone = '';
        this.newLastName = '';
        this.addStatus = false;
        this.editStatus = false;
      }
    }
    else if(this.newFirstName !== '' && this.newLastName !== '' && this.phoneRegExp.test(this.newPhone)){
    console.log('3')
      this.newObject = {
        firstName: this.newFirstName,
        lastName: this.newLastName,
        number: this.newPhone
      }
      this.phoneBook.push(this.newObject);
      this.newFirstName = '';
      this.newLastName = '';
      this.newPhone = '';
      this.addStatus = false;
    }
  }

  deleteContact(index: number): void{
    if(this.field === '') this.phoneBook.splice(index, 1);
  }

  editContact(index: number): void{
    if(this.field === ''){
      this.addStatus = true;
      this.newLastName = this.phoneBook[index].lastName;
      this.newFirstName = this.phoneBook[index].firstName;
      this.indexContact = index;
      this.newPhone = this.phoneBook[index].number;
      this.editStatus = true;
    }
  }

}


export interface MyPhoneBook {
  firstName: string;
  lastName: string;
  number: string;
}
