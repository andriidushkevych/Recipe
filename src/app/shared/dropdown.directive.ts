import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') dropdownClicked = false;

  @HostListener('click') onToggleOpen() {
    this.dropdownClicked = !this.dropdownClicked;
  }
}
