import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Config } from '../config';

@Injectable()
export class DataService {
  breweryDBURL = 'http://api.brewerydb.com/v2/';
  geocodeURL = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
  weatherURL = 'https://api.darksky.net/forecast/';

  /** BreweryDB API **/
  public beerStyles: any = {};
  public beersByStyleId: any = {};

  /** GoogleMaps API **/
  public breweryKey: string;
  public geoCodes: any = {};

  /** DarkSky API **/
  private weatherKey: string;
  public localWeatherData: any = {};

  public weatherData$ = new BehaviorSubject<any>({});
  public showResults$ = new BehaviorSubject<any>(false);
  public beersByStyleId$ = new Subject;


  constructor(private http: HttpClient, private config: Config) {
    this.breweryKey = this.config.tokens.breweryDB;
    this.weatherKey = this.config.tokens.darkSky;
    this.loadAllStyles();
  }

  loadAllStyles() {
    this.http.get(this.breweryDBURL + '/styles/' + this.breweryKey)
      .subscribe(data => {
        this.beerStyles = data;
        console.log('beerStyles');
        console.log(this.beerStyles);
      })
  }
  getBeerByStyleId(id) {
    this.http.get(this.breweryDBURL + '/beers/' + this.breweryKey + '&styleId=' + id + '&withBreweries=y')
      .subscribe(data => {
        this.beersByStyleId = data;
        console.log('beersByStyleId');
        console.log(this.beersByStyleId);
        this.beersByStyleId$.next(data);
      })

  }

  getGeoCode(zip) {
    // Takes zip code and provides lat / long coordinates from google maps API.
    this.http.get(this.geocodeURL + zip).subscribe(data => {
      this.geoCodes = data;
      const lat = this.geoCodes.results[0].geometry.location.lat;
      const lng = this.geoCodes.results[0].geometry.location.lng;
      this.getWeatherByLocation(lat, lng)
    })
  }

  getWeatherByLocation(lat: number, lng: number) {
    // Takes lat / long coordinates and povides weather data for area.
    this.http.get(this.weatherURL + this.weatherKey + lat + ',' + lng).subscribe(data => {
      this.localWeatherData = data;
      this.weatherData$.next(this.localWeatherData);
    })
  }

}
