import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  @Input()
  public disabled;

  @Output()
  public myclick: EventEmitter<{ message: string }> = new EventEmitter();

  @Output()
  public inputOnChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.disabled);

  }

  search() {
    this.myclick.emit({ message: 'test' });
  }

  myChange(message) {
    this.inputOnChange.emit({ message });
  }

}
