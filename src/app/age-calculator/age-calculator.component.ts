import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  birthDate: string;
  age: { years: number, months: number, days: number };

  calculateAge(): void {
    if (this.birthDate) {
      const birthDate = new Date(this.birthDate);
      const today = new Date();

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        days += this.daysInMonth(today.getMonth() - 1, today.getFullYear());
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      this.age = { years, months, days };
    }
  }

  private daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
