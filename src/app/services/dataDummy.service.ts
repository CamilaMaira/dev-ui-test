import { Injectable } from '@angular/core';

@Injectable()
export class dataDummyService {

  blue = 0;
  red = 0;

  private dataDummy:Data[] = [

    {
      'id': 0,
      'name': 'Stephen',
      'lastname': 'Strange',
      'color': 'blue',
      'value': 12
    },
    {
      'id': 1,
      'name': 'Thor',
      'lastname': 'Odinson',
      'color': 'blue',
      'value': 11
    },
    {
      'id': 2,
      'name': 'Tony',
      'lastname': 'Stark',
      'color': 'red',
      'value': 13
    },
    {
      'id': 3,
      'name': 'Peter',
      'lastname': 'Parker',
      'color': 'red',
      'value': 8
    },
    {
      'id': 4,
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
  };

}

export interface Data{
  id: number,
  name: string;
  lastname: string;
  color: string;
  value: number;
};