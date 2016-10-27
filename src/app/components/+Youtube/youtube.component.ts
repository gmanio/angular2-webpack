import {
    Component, ChangeDetectorRef,
    ChangeDetectionStrategy, AfterViewChecked, ViewChild
} from '@angular/core';
import {PlayerComponent} from "./player.component";
import {QueryService} from '../../services/queryService'

@Component({
    selector: 'content',
    templateUrl: 'youtube.component.html',
    styleUrls: ['youtube.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class YoutubeComponent implements AfterViewChecked {
    static apiKey = 'AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ';

    isLoaded: boolean = false;
    isLoading: boolean = true;
    videoList: any = [];

    private nextPageToken;
    private query;

    constructor(private cd: ChangeDetectorRef, queryService: QueryService) {
        this.cd = cd;
        this.attachedEvent();

        queryService.searchQueryObservable.subscribe(
            (e) => {
                if (this.isLoading == false) {
                    this.videoList = [];
                    this.nextPageToken = null;
                    this.isLoading = true;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    this.query = e;
                    this.request(null);
                }

            }
        );
    }

    attachedEvent() {
        window['gapi'].load('client', this.onLoadClient.bind(this));
        window.addEventListener('touchstart', this.onScroll.bind(this), false);
        window.addEventListener('mousedown', this.onScroll.bind(this), false);
    }

    onScroll() {
        let scrollBottom = document.body.scrollTop + document.body.offsetHeight;
        let windowHeight = document.body.scrollHeight;

        if (scrollBottom >= (windowHeight / 1.2)) {
            if (this.isLoading == false) {
                this.isLoading = true;
                this.forceViewRefresh();
                this.request({pageToken: this.nextPageToken});
            }
        }
    }

    onLoadClient() {
        let oClient = window['gapi']['client'];

        oClient.setApiKey(YoutubeComponent.apiKey);
        oClient.load('youtube', 'v3').then(this.onLoadYoutube.bind(this));
    }

    onLoadYoutube() {
        this.request(null);
    }

    request(query) {
        let initOption = {
            part: 'snippet', //required
            q: this.query ? this.query : 'ps4',
            order: 'date',
            maxResults: 10
        }

        if (query != null) {
            initOption = (<any>Object).assign({}, initOption, query);
        }

        window['gapi']['client']['youtube']['search']['list'](initOption).then(this.onLoadSuccess.bind(this), this.onLoadFailed.bind(this))
    }

    onLoadSuccess(res) {
        let result = res.result;

        this.videoList = this.videoList.concat(result.items);

        this.nextPageToken = result.nextPageToken;
        this.isLoaded = true;

        setTimeout(()=> {
            this.isLoading = false;

            this.cd.markForCheck();
            this.cd.detectChanges();
        }, 800);

        this.forceViewRefresh();
    }

    onLoadFailed(err) {
        console.warn(err);
    }

    ngAfterViewChecked() {
        console.log('viewchecked');
    }

    forceViewRefresh(){
        this.cd.markForCheck();
        this.cd.detectChanges();
    }

    @ViewChild(PlayerComponent) oPlayer: PlayerComponent;
    openPlayer(item) {
        this.oPlayer.open(item);
    }
}