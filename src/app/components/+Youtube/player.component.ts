import {
    Component, Input
} from '@angular/core';

@Component({
    selector: 'playerComponent',
    templateUrl: 'player.component.html',
    styleUrls: ['youtube.component.css'],
})

export class PlayerComponent {
    private player;
    isPlayerOpen: boolean = false;

    constructor() {
        window.onload = ()=> {
            this.player = new window['YT'].Player('ytplayer', {
                height: window.innerHeight,
                width: window.innerWidth,
                // videoId: item.id.videoId,
                events: {
                    'onReady': (e)=> {
                        setTimeout(()=> {
                            e.target.playVideo();
                        }, 500);
                    }
                }
            });
        }


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