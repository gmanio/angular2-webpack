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

    constructor(queryService: QueryService) {
        this.queryService = queryService;
        this.interval = 800;
        this.sendQuery = null;
    }

    onClickedSort(sSort){
        this.queryService.searchSort = sSort;
    }

    onKeyDown(e) {

    }

    onInputChange(e) {
        if (this.sendQuery != null) {
            clearTimeout(this.sendQuery);
        }

        this.sendQuery = setTimeout(()=> {
            this.queryService.searchText = e.toString();
        }, this.interval);

    }
}