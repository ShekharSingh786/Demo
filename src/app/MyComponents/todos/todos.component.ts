import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { Todo } from "../../Todo"
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [NgFor, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent implements OnInit{
 
  todos:Todo[];
  constructor(){  
       this.todos=[
        {
            sno: 1,
            title: "This is title 1",
            desc: "Description",
            active: true
        },
        {
          sno: 2,
          title: "This is title 2",
          desc: "Description",
          active: true
        },
        {
          sno: 3,
          title: "This is title 3",
          desc: "Description",
          active: true
        },
       ]
  }

  ngOnInit(): void{

  }
  
  deleteTodo(todo: Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
  }
 

}
