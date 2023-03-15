import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div>test</div>
    <app-footer></app-footer>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'todo-app';
}
