import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class QueryService {
    public searchTextObservable: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public searchSortObservable: BehaviorSubject<string> = new BehaviorSubject<string>("");

    set searchText(value: string) {
        this.searchTextObservable.next(value);
    }

    set searchSort(value: string) {
        this.searchSortObservable.next(value);
    }
}