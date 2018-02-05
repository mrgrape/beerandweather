import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() weeklyWeather = [];
  public currentIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  selectDay(day, index) {
    this.currentIndex = index;
    console.log(day);
    console.log(index);
  }

}
