import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {

  // inputValue = 'Dummy Value';
  constructor() { }

  // inputKeyUpHandler(event: KeyboardEvent) {
  //   console.log(event);
  //   this.inputValue = (event.target as HTMLInputElement).value;
  // }

  btnClickHandler(value: MouseEvent, inputEl: HTMLInputElement): void{
    console.log('Button was clicked', value);
    console.log(inputEl.value);
  }
  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
    console.log('Name input component was destroyed');
  }
}
