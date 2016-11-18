import {RouterModule} from "@angular/router";

import {AboutComponent} from './components/+About/about.component'
import {YoutubeComponent} from './components/+Youtube/youtube.component';
import {PortfolioComponent} from './components/+About/portfolio/portfolio.component';
import {PageNotFoundComponent} from './components/+Error/page.not.found.component';

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'youtube', pathMatch: 'full'},
    {path: 'youtube', component: YoutubeComponent},
    {path: 'about', component: AboutComponent, pathMatch: 'full'},
    {
        path: "**",
        component: PageNotFoundComponent
    }
]);