import {Component} from '@angular/core';

@Component({
    template:`
        <div>
            <span>{{title}}</span>
        </div>`,
})

export class PageNotFoundComponent{
    title = 'Page Not Found';
}