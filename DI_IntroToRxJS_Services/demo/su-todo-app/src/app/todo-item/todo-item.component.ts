import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Todo {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;

  @Output() completeStateChange: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleCompleteStateChange(todoToChange: Todo): void {
    // todoToChange.isCompleted = !todoToChange.isCompleted;

    this.completeStateChange.emit(todoToChange)
  }

}

class Calculator {
  calculateArea(shape: any): number {
    if (shape.width && shape.height) {
      return shape.width * shape.height;
    } else if (shape.base && shape.height) {
      return shape.base * shape.height / 2;
    }

    return 0;
  }
}

const calc = new Calculator();
console.log(calc.calculateArea({ base: 6, height: 8 }));
console.log(calc.calculateArea({ width: 4, height: 8 }));