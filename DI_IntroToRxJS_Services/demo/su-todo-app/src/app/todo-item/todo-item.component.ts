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

interface iShape {
  calculateArea(): number;

}

class Rectangle implements iShape{

  constructor(public width: number, public height: number) {}
  
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Triangle implements iShape {
  constructor(public base: number, public height: number) {}

  calculateArea(): number {
      return this.base * this.height / 2;
  }
}

class Circle implements iShape {

  constructor(public radius:  number) {}

  calculateArea(): number {
      return Math.PI * this.radius * this.radius;
  }
}
const calc = new Calculator();

console.log(calc.calculateArea({ base: 6, height: 8 }));
console.log(calc.calculateArea({ width: 4, height: 8 }));
const triangle = new Triangle(4, 3);
const rectangle = new Rectangle(5, 5);
const circle = new Circle(4);

console.log('Triangle', triangle.calculateArea());
console.log('Rectangle', rectangle.calculateArea());
console.log('Circle', circle.calculateArea());