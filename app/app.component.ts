import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import * as THR33 from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'meta3ng';

  constructor(private ngZone: NgZone) { }

  ngOnInit() {

    const l= 400;
    
  }
}
