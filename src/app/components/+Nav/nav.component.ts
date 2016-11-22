import {Component} from '@angular/core';

import {QueryService} from '../../services/queryService'

@Component({
    selector: 'header',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})

export class NavComponent {
    private queryService;
    private interval;
    private sendQuery;
    private isBlur;

    constructor(queryService: QueryService) {
        this.queryService = queryService;
        this.interval = 2000;
        this.sendQuery = null;
    }

    onClickedSort(sSort) {
        this.queryService.searchSort = sSort;
    }

    onKeyUp(e) {
        let keyEvent = e;

        if (this.isBlur != null) {
            clearTimeout(this.isBlur);
        }

        this.isBlur = setTimeout(()=> {
            keyEvent.target.blur();
        }, this.interval);
    }

    onInputChange(e) {
        if (this.sendQuery != null) {
            clearTimeout(this.sendQuery);
        }
        //
        // this.sendQuery = setTimeout(()=> {
        //     this.queryService.searchText = e.toString();
        // }, this.interval);
    }

    search(searchText){
        this.queryService.searchText = searchText;
    }
}