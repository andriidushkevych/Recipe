import {
  Component,
  OnInit,
  Output,
  ElementRef,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() shoppingView = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  onMenuShoppingClick() {
    this.shoppingView.emit(true);
  }

  onMenuRecipeClick() {
    this.shoppingView.emit(false);
  }

}
