import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>The user's name is {{ name() }}</p>`,
})
export class User {
  username = "youngTech";
  name = input<string>("Tristan");
}

@Component({
  imports: [User],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-dev');

  isServerRunning = true;

  isEditable = true;

  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'macOS'}, {id: 'linux', name: 'Linux'}];

  users = [
    { id: 0, name: 'Sarah'},
    { id: 0, name: 'Amy'},
    { id: 0, name: 'Rachel'},
    { id: 0, name: 'Jessica'},
    { id: 0, name: 'Poorinima'}
  ]

  message = ''; 

  greet() {
    console.log("Hello, there !");
  }

  showSecretMessage() {
    this.message = 'Way to go!';
  }
}
