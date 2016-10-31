import {
    Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter
} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'playerComponent',
    templateUrl: 'player.component.html',
    styleUrls: ['youtube.component.css'],
})

export class PlayerComponent implements OnInit {

    private player;
    isPlayerOpen: boolean = false;

    constructor() {
        window['onYouTubeIframeAPIReady'] = ()=> {
            this.player = new window['YT'].Player('ytplayer', {
                height: window.innerHeight,
                width: window.innerWidth,
                // videoId: item.id.videoId,
                events: {
                    'onReady': (e)=> {
                        e.target.playVideo();
                    }
                }
            });
        }
    }

    ngOnInit() {
        window.addEventListener('resize', this.onResize.bind(this), false);
    }

    onResize() {
        if (this.player) {
            this.player.setSize(window.innerWidth, window.innerHeight);
        }
    }

    hide() {
        this.bodyUnFixed();
        this.player.stopVideo();
        this.isPlayerOpen = false;
    }

    open(item) {
        this.isPlayerOpen = true;
        this.bodyFixed();

        if (this.player) {
            this.player.loadVideoById(item.id.videoId);
            return;
        }
    }

    bodyFixed() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add("fixed");   //add the class
    }

    bodyUnFixed() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("fixed");   //remove the class
    }
}