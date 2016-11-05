import {AboutComponent} from './components/+About/about.component'
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'app', pathMatch: 'full'},
    {path: 'app', component: AppComponent},
    {path: 'test', component: AboutComponent, outlet: 'about'},
]);