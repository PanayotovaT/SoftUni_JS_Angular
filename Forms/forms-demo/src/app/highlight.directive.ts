import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{ // implements OnChanges {

  @Input() set isActive(isActive: boolean){
    if(isActive) {
      this.color ='red';
    } else {
      this.color='black'
    }
  }

  @HostBinding('style.color') color ='black';

  //--------------------------------
  // @Input() isActive!: boolean;

  // constructor(
  //   private elementRef: ElementRef
  // ) { }

  // //If we want to have access to the previous value;
  // // ngOnChanges(simpleChanges: SimpleChanges) : void{
  // //   if(simpleChanges['isActive'].currentValue) {
  // //     this.elementRef.nativeElement.style.color = 'red';
  // //   } else {
  // //     this.elementRef.nativeElement.style.color = 'black';

  // //   }
  // // }

  // ngOnChanges() : void{
  //   if(this.isActive) {
  //     this.elementRef.nativeElement.style.color = 'red';
  //   } else {
  //     this.elementRef.nativeElement.style.color = 'black';
  //   }
  // }

}
