import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TodoService]

})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];

  constructor( private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().then(todos =>this.todos = todos)
  }


  markAllTodosAsCompleted(): void {
    for(const todo of this.todos) {
      todo.isCompleted = true;
    }
  }

  handleStateChange(todoToChange: Todo): void {
    console.log(todoToChange.title);
    todoToChange.isCompleted = !todoToChange.isCompleted;
  }
}
