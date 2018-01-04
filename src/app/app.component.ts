import {Component, Input, ElementRef, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCbgRMzJGR5oHA3AFNqoYP2FPu37TzTNhY",
      authDomain: "ng-recipe-book-63466.firebaseapp.com"});
  }
}
