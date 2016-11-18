import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private router: Router) {
        this.router = router;

        this.setEvents();
    }

    setEvents() {
        this.router.events.subscribe((val) => {
            console.log(val);
        });
    }


}