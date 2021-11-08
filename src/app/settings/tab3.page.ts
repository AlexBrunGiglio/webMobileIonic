import { Component, OnInit } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  brightnessValue: number;

  constructor(
    public brightness: Brightness,
  ) {
  }

  async ngOnInit() {
    this.brightnessValue = await this.brightness.getBrightness();
  }
}
