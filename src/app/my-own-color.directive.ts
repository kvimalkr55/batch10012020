import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyOwnColor]'
})
export class MyOwnColorDirective {

  constructor(private jjjj: ElementRef) { 
      jjjj.nativeElement.style.color = 'red';
  }

}
