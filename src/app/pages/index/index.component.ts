import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  name: string = 'Patiphat';
  age: number = 20;
  today = new Date();
  birthday = new Date(2003, 8, 5); // ป/ด/ว
  check: boolean = true;
  products = [];
  ngOnInit() {
    console.log('Name ' + this.name + ' age ' + this.age);
    console.log(' birthday ' + this.birthday);
    this.calculate();
  }
  calculate() {
    let A = 200;
    let B = 50;
    let C = A + B;
    console.log('Sum = ' + C);
  }
}
