import { Injectable } from '@angular/core';

@Injectable()
export class dataDummyService {

  private dataDummy:Data[] = [

    {
      'name': 'Stephen',
      'lastname': 'Strange',
      'color': 'blue',
      'value': 12
    },
    {
      'name': 'Thor',
      'lastname': 'Odinson',
      'color': 'blue',
      'value': 11
    },
    {
      'name': 'Tony',
      'lastname': 'Stark',
      'color': 'red',
      'value': 13
    },
    {
      'name': 'Peter',
      'lastname': 'Parker',
      'color': 'red',
      'value': 8
    },
    {
      'name': 'Bruce',
      'lastname': 'Banner',
      'color': 'blue',
      'value': 17
    },
  ]; 


  constructor() { 

  }

  getData(){
    return this.dataDummy;
  }
}

export interface Data{
  name: string;
  lastname: string;
  color: string;
  value: number;
};