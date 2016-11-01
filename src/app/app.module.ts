// Native Module
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

// User Module
import {AppComponent} from './app.component';
import {NavComponent} from './components/+Nav/nav.component';
import {YoutubeComponent} from './components/+Youtube/youtube.component';
import {PlayerComponent} from './components/+Youtube/player.component';
import {GpsService} from './services/gpsService';
import {FormsModule} from "@angular/forms";

// User Service
import {QueryService} from './services/queryService';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        YoutubeComponent,
        PlayerComponent
    ],
    bootstrap: [AppComponent],
    providers: [QueryService, GpsService]
})
export class AppModule {
}