import {
    Component, ChangeDetectorRef,
    ChangeDetectionStrategy, AfterViewChecked, ViewChild
} from '@angular/core';
import {PlayerComponent} from "./player.component";
import {QueryService} from '../../services/queryService';

@Component({
    selector: 'content',
    templateUrl: 'youtube.component.html',
    styleUrls: ['youtube.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class YoutubeComponent implements AfterViewChecked {
    static apiKey = 'AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ';

    isLoading: boolean = true;
    videoList: any = [];

    private nextPageToken;
    private query;
    private sort;
    private isTopScrollVisible;

    constructor(private cd: ChangeDetectorRef, queryService: QueryService) {
        this.cd = cd;
        this.attachedEvent();

        queryService.searchTextObservable.subscribe((e) => {
            if (this.isLoading == false) {
                this.isLoading = true;
                this.forceViewRefresh();

                this.videoList = [];
                this.nextPageToken = null;
                this.query = e;
                this.request(null);
            }
        });

        queryService.searchSortObservable.subscribe((e)=> {
            if (this.isLoading == false) {
                this.isLoading = true;
                this.forceViewRefresh();

                this.videoList = [];
                this.nextPageToken = null;
                this.sort = e;
                this.request(null);
            }
        })
    }

    attachedEvent() {
        window['gapi'].load('client', this.onLoadClient.bind(this));
        window.addEventListener('touchstart', this.onScroll.bind(this), false);
        window.addEventListener('mousedown', this.onScroll.bind(this), false);
        window.addEventListener('scroll', this.onScroll.bind(this), false);
    }

    onScroll() {
        let scrollBottom = document.body.scrollTop + document.body.offsetHeight;
        let windowHeight = document.body.scrollHeight;

        if (document.body.scrollTop > 50) {
            this.isTopScrollVisible = true;
            this.forceViewRefresh();
        } else {
            this.isTopScrollVisible = false;
            this.forceViewRefresh();
        }

        if (scrollBottom >= (windowHeight / 1.4)) {
            if (this.isLoading == false) {
                this.isLoading = true;
                this.forceViewRefresh();
                this.request({pageToken: this.nextPageToken});
            }
        }
    }

    onScrollToTop(scrollDuration) {
        const scrollHeight = window.scrollY,
            scrollStep = Math.PI / ( scrollDuration / 15 ),
            cosParameter = scrollHeight / 2;
        let scrollCount = 0,
            scrollMargin,
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    scrollCount = scrollCount + 1;
                    scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                    window.scrollTo(0, ( scrollHeight - scrollMargin ));
                }
                else clearInterval(scrollInterval);
            }, 15);
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
            order: this.sort ? this.sort : 'relevance',
            maxResults: 20,
            region: 'KR'
        }

        if (query != null) {
            initOption = (<any>Object).assign({}, initOption, query);
        }

        window['gapi']['client']['youtube']['search']['list'](initOption).then(this.onLoadSuccess.bind(this), this.onLoadFailed.bind(this));
    }

    onLoadSuccess(res) {
        this.videoList = this.videoList.concat(res.result.items);
        this.nextPageToken = res.result.nextPageToken;

        this.isLoading = false;
        this.forceViewRefresh();
        var divs = document.querySelectorAll('.video_item');

        let interval = 100;

        [].forEach.call(divs, function (div) {
            setTimeout(()=> {
                div.className += " added";
            }, interval);
            interval += 10;
        });
        setTimeout(()=> {
            this.forceViewRefresh();
        }, 500);
    }

    onLoadFailed(err) {
        console.warn(err);
    }

    ngAfterViewChecked() {
        console.log('viewchecked');
    }

    forceViewRefresh() {
        this.cd.markForCheck();
        this.cd.detectChanges();
    }

    @ViewChild(PlayerComponent) oPlayer: PlayerComponent;

    openPlayer(item) {
        this.oPlayer.open(item);
    }
}