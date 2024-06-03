import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { Investition } from './models/investition';
import { CalculationService } from './services/calculation.service';
import { Interest } from './models/interest';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  constructor(private calculationService: CalculationService) {}
  investmentResults?: Interest[];
  onCalculateInvestment(data: Investition) {
    let results = this.calculationService.calculateInvestmentResults(data);
    this.investmentResults = results;
  }
}
