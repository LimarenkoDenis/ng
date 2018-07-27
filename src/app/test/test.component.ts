import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  opneTestPopup(event) {
    console.log(event);

    console.log('open test popup');

  }

  testChange(value) {
    console.log(value);

  }

  inputChange(value) {
    console.log('inputChange',value);

  }
  focus(value) {
    console.log('focus',value);

  }
  input(value) {
    console.log(',input',value);

  }

  mouseover(value){
    console.log(value);

  }

}
