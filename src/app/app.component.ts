import { Component, OnInit } from '@angular/core';
import { dataDummyService, Data } from './services/dataDummy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  total: number;
  blue: number;
  dataDummy:Data[] = [];

 constructor( private _dataDummyService: dataDummyService ) {

  } 

  ngOnInit() {
    this.dataDummy = this._dataDummyService.getData();
    console.log(this.dataDummy);

    this.total = this.dataDummy.reduce((
      acc,
      obj,
    ) => acc + (obj.value + obj.value),
    0);
    return (
      console.log("Total: ", this.total)
    );

    
  }
        

        

    /* dataDummy = [
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
 */
}
