import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent {

  inputValues: string = '';
  average: number = 0;

  calcularPromedio() {
    const values = this.inputValues.split(',').map(value => parseFloat(value.trim()));
    const sum = values.reduce((total, value) => total + value, 0);
    this.average = sum / values.length;
  }

}
