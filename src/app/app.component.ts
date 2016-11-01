import {Component, ViewEncapsulation} from '@angular/core';
import {GpsService} from './services/gpsService';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GpsService]
})

export class AppComponent {
    private gpsService;

    constructor(gpsService : GpsService){
        this.gpsService = gpsService;
    }
}