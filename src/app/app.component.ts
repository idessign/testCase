import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-case';

  classApplied = false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }
}
