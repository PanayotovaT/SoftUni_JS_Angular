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
  // calculateArea(shape: any): number {
  //   if (shape.width && shape.height) {
  //     return shape.width * shape.height;
  //   } else if (shape.base && shape.height) {
  //     return shape.base * shape.height / 2;
  //   }

  //   return 0;
  // }

  calculateArea(shape: iShape): number {
    return shape.calculateArea()
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

console.log('Rectangle', calc.calculateArea(new Rectangle( 4, 5)));
console.log('Triangle', calc.calculateArea(new Triangle(6, 7)));
console.log('Circle', calc.calculateArea(new Circle(6)));
