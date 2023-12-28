import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TodosComponent, NgFor]
})
export class AppComponent {
  title = 'demo-todo-list';
  constructor(){
    //setTimeout(() => {
      //this.title = "Changed title";
    //}, 2000);
  }

}
