import {RouterModule} from "@angular/router";

import {AboutComponent} from './components/+About/about.component'
import {YoutubeComponent} from './components/+Youtube/youtube.component';

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'youtube', pathMatch: 'full'},
    {path: 'youtube', component: YoutubeComponent},
    {path: 'test', component: AboutComponent},
]);