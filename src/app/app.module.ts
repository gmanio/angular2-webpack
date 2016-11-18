// Native Module
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {FormsModule} from "@angular/forms";

// User Module
import {AppComponent} from './app.component';
import {NavComponent} from './components/+Nav/nav.component';
import {YoutubeComponent} from './components/+Youtube/youtube.component';
import {PlayerComponent} from './components/+Youtube/player.component';
import {AboutComponent} from './components/+About/about.component'
import {PortfolioComponent} from './components/+About/portfolio/portfolio.component';
import {PageNotFoundComponent} from './components/+Error/page.not.found.component';

// User Service
import {QueryService} from './services/queryService';

// User Router
import {routingModule} from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        YoutubeComponent,
        PlayerComponent,
        AboutComponent,
        PortfolioComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [QueryService]
})

export class AppModule {}