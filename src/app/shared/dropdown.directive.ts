import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click') toggleOpen(): any {
    this.isOpen = !this.isOpen;
    this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }
}
