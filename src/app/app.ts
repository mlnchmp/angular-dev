import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username {{ username }}`,
})
export class User {
  username = "youngTech";
}

@Component({
  imports: [User],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-dev');

  city = 'San Francisco';
}
