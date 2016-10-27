import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class QueryService {
    public searchQueryObservable: BehaviorSubject<string> = new BehaviorSubject<string>("");

    set searchText(value: string) {
        this.searchQueryObservable.next(value);
    }
}