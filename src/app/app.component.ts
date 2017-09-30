import { Component, Input, ElementRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shoppingView = true;

  onNavigate(boolVal: boolean) {
    this.shoppingView = boolVal;
  }
}
