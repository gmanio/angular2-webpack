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
var PlayerComponent = (function () {
    function PlayerComponent() {
        var _this = this;
        this.isPlayerOpen = false;
        window['onYouTubeIframeAPIReady'] = function () {
            _this.player = new window['YT'].Player('ytplayer', {
                height: window.innerHeight,
                width: window.innerWidth,
                // videoId: item.id.videoId,
                events: {
                    'onReady': function (e) {
                        e.target.playVideo();
                    }
                }
            });
        };
    }
    PlayerComponent.prototype.ngOnInit = function () {
        window.addEventListener('resize', this.onResize.bind(this), false);
    };
    PlayerComponent.prototype.onResize = function () {
        if (this.player) {
            this.player.setSize(window.innerWidth, window.innerHeight);
        }
    };
    PlayerComponent.prototype.hide = function () {
        this.bodyUnFixed();
        this.player.stopVideo();
        this.isPlayerOpen = false;
    };
    PlayerComponent.prototype.open = function (item) {
        this.isPlayerOpen = true;
        this.bodyFixed();
        if (this.player) {
            this.player.loadVideoById(item.id.videoId);
            return;
        }
    };
    PlayerComponent.prototype.bodyFixed = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add("fixed"); //add the class
    };
    PlayerComponent.prototype.bodyUnFixed = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove("fixed"); //remove the class
    };
    PlayerComponent = __decorate([
        core_1.Component({
            selector: 'playerComponent',
            templateUrl: 'player.component.html',
            styleUrls: ['youtube.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map