import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 12px 16px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `
})
export class CounterPageComponent {

  count = 0;

  incrementBy(value: number) {
    this.count += value;
  }

  decrementBy(value: number) {
    this.count -= value;
  }

  resetCounter() {
    this.count = 0;
  }
}
