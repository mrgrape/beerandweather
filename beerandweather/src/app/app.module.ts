import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Routing */
import { AppRoutingModule } from './app.routing';


/** Components **/
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

/** Services **/
import { DataService } from './global/data.service';
import { HomeComponent } from './home/home.component';

import { TypeaheadModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { ResultsPageComponent } from './results-page/results-page.component';
import { BeerComponent } from './results-page/beer/beer.component';
import { WeatherComponent } from './results-page/weather/weather.component';

/** Pipes **/
import { ConvertTimePipe } from './convert-time.pipe';

import { TabsModule } from 'ngx-bootstrap';

import { Config } from './config';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ResultsPageComponent,
    BeerComponent,
    WeatherComponent,
    ConvertTimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [DataService, Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
