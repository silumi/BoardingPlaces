import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click', ['$event']) toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
