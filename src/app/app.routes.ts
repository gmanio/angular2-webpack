import {AboutComponent} from './components/+About/about.component'
// import {AppComponent} from './app.component';
import {YoutubeComponent} from './components/+Youtube/youtube.component';
import {RouterModule} from "@angular/router";

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'youtube', pathMatch: 'full'},
    {path: 'youtube', component: YoutubeComponent},
    {path: 'test', component: AboutComponent},
]);