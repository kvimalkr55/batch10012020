import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeTextColor]'
})
export class ChangeTextColorDirective {

  constructor(eleRef: ElementRef) {
    eleRef.nativeElement.style.color = 'red';
   }

}
