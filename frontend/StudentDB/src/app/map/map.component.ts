import {Component, Input, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from '../app.component';
import {AppModule} from '../app.module';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input()
  lat = 47.068989;
  @Input()
  lng = 15.405873;
  zm = 15;
  type = 'hybrid';

  constructor() {
  }

  ngOnInit() {
  }

}

