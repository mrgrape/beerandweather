import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit, OnChanges {
  @Input() beerPerfectMatch = {};
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.beerPerfectMatch);
  }

}
