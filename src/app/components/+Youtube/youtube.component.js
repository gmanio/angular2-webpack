"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var player_component_1 = require("./player.component");
var queryService_1 = require('../../services/queryService');
var YoutubeComponent = (function () {
    function YoutubeComponent(cd, queryService) {
        var _this = this;
        this.cd = cd;
        this.isLoading = true;
        this.videoList = [];
        this.cd = cd;
        this.attachedEvent();
        queryService.searchTextObservable.subscribe(function (e) {
            if (_this.isLoading == false) {
                console.log('observable');
                _this.isLoading = true;
                _this.forceViewRefresh();
                _this.videoList = [];
                _this.nextPageToken = null;
                _this.query = e;
                _this.request(null);
            }
        });
        queryService.searchSortObservable.subscribe(function (e) {
            if (_this.isLoading == false) {
                _this.isLoading = true;
                _this.forceViewRefresh();
                _this.videoList = [];
                _this.nextPageToken = null;
                _this.sort = e;
                _this.request(null);
            }
        });
    }
    YoutubeComponent.prototype.attachedEvent = function () {
        window['gapi'].load('client', this.onLoadClient.bind(this));
        window.addEventListener('touchstart', this.onScroll.bind(this), false);
        window.addEventListener('mousedown', this.onScroll.bind(this), false);
    };
    YoutubeComponent.prototype.onScroll = function () {
        var scrollBottom = document.body.scrollTop + document.body.offsetHeight;
        var windowHeight = document.body.scrollHeight;
        if (scrollBottom >= (windowHeight / 1.3)) {
            if (this.isLoading == false) {
                this.isLoading = true;
                this.forceViewRefresh();
                this.request({ pageToken: this.nextPageToken });
            }
        }
    };
    YoutubeComponent.prototype.onLoadClient = function () {
        var oClient = window['gapi']['client'];
        oClient.setApiKey(YoutubeComponent.apiKey);
        oClient.load('youtube', 'v3').then(this.onLoadYoutube.bind(this));
    };
    YoutubeComponent.prototype.onLoadYoutube = function () {
        this.request(null);
    };
    YoutubeComponent.prototype.request = function (query) {
        var initOption = {
            part: 'snippet',
            q: this.query ? this.query : 'ps4',
            order: this.sort ? this.sort : 'relevance',
            maxResults: 10
        };
        if (query != null) {
            initOption = Object.assign({}, initOption, query);
        }
        window['gapi']['client']['youtube']['search']['list'](initOption).then(this.onLoadSuccess.bind(this), this.onLoadFailed.bind(this));
    };
    YoutubeComponent.prototype.onLoadSuccess = function (res) {
        var _this = this;
        this.videoList = this.videoList.concat(res.result.items);
        this.nextPageToken = res.result.nextPageToken;
        setTimeout(function () {
            _this.isLoading = false;
            _this.forceViewRefresh();
        }, 500);
    };
    YoutubeComponent.prototype.onLoadFailed = function (err) {
        console.warn(err);
    };
    YoutubeComponent.prototype.ngAfterViewChecked = function () {
        console.log('viewchecked');
    };
    YoutubeComponent.prototype.forceViewRefresh = function () {
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    YoutubeComponent.prototype.openPlayer = function (item) {
        this.oPlayer.open(item);
    };
    YoutubeComponent.apiKey = 'AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ';
    __decorate([
        core_1.ViewChild(player_component_1.PlayerComponent), 
        __metadata('design:type', player_component_1.PlayerComponent)
    ], YoutubeComponent.prototype, "oPlayer", void 0);
    YoutubeComponent = __decorate([
        core_1.Component({
            selector: 'content',
            templateUrl: 'youtube.component.html',
            styleUrls: ['youtube.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, queryService_1.QueryService])
    ], YoutubeComponent);
    return YoutubeComponent;
}());
exports.YoutubeComponent = YoutubeComponent;
//# sourceMappingURL=youtube.component.js.map