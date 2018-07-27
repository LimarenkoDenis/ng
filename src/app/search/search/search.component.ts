import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input('text')
  public title: string;

  constructor() { }

  ngOnInit() {
  }

  onCheckEvent(value) {
    console.log(value);
  }

  onindeterminateChange(value) {
    console.log('in', value);

  }

}
