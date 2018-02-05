import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../global/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit, OnDestroy {
  currentWeatherData$: Subscription;
  public currentWeatherData: any;
  beersByStyleId$: Subscription;
  public beersByStyleId: any;
  public beerPerfectMatch: any;

  public weeklyWeather = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.currentWeatherData$ = this.data.weatherData$.subscribe(currentWeatherData => {
      this.currentWeatherData = currentWeatherData;
      this.buildWeeklyWeather();
    });
    this.beersByStyleId$ = this.data.beersByStyleId$.subscribe(beersByStyleId => {
      this.beersByStyleId = beersByStyleId;
      this.pickABeer(beersByStyleId);
    });
  }
  buildWeeklyWeather() {
    if (this.currentWeatherData.hasOwnProperty('daily')) {
      this.weeklyWeather.push(this.currentWeatherData.daily.data);
      this.weeklyWeather[0].splice(6);
      this.weeklyWeather[0].forEach(element => {
        const temp = element.temperatureHigh.toString().substring(0, 2);
        const val = parseInt(temp, 10);
        element.temperatureHigh = val;
      });
    }
  }
  pickABeer(beersByStyleId) {
    const index = Math.floor(Math.random() * 50) + 1;
    console.log(index);
    console.log('beersByStyleId');
    this.beerPerfectMatch = beersByStyleId.data[index];
  }
  search() {
    this.data.showResults$.next(false);
  }

  ngOnDestroy() {
    this.beersByStyleId$.unsubscribe();
    this.currentWeatherData$.unsubscribe();
  }
}
