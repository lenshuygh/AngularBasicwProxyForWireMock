import { Component, OnInit } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fairhouse';
  selectedLocation: HousingLocation | undefined;
  url = '/api/angular/housing/housingLocations';
  // url = 'http://localhost:8383/api/angular/housing/housingLocations';
  housingLocationList!: HousingLocation[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<HousingLocation[]>(this.url).subscribe(
      (response) => {
        this.housingLocationList = response;
        console.log('response: ', response);
      },
      (error) => {
        console.error('ERR', error.message);
      },
    );
  }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
