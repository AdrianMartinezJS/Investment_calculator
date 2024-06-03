import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investition } from '../models/investition';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<Investition>();

  enteredInitialInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedReturn: string = '5';
  enteredDuration: string = '10';

  submit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment),
      annualInvestment: +this.enteredAnnualInvestment, // the same than Number()
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
    });
  }
}
