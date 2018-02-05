import { Component, OnInit } from '@angular/core';
import { DataService } from '../global/data.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showResults: Boolean;
  public showResults$ = new Subscription;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.showResults$ = this.data.showResults$.subscribe(showResults => {
      this.showResults = showResults;
    });
  }

  test() {
    this.data.getBeerByStyleId(14);
  }

}
