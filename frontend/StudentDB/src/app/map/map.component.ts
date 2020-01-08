import {Component, Input, OnInit} from '@angular/core';


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

