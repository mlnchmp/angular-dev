import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username {{ username }}`,
})
export class User {
  username = "youngTech";
}

@Component({
  imports: [],
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
}
