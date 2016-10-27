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

    constructor(){}

    hide(){
        this.bodyUnFixed();

        this.isPlayerOpen = false;
    }

    open(item){
        this.bodyFixed();

        if(this.player){
            this.player.loadVideoById(item.id.videoId);
            return;
        }

        this.player = new window['YT'].Player('ytplayer', {
            height: window.innerHeight,
            width: window.innerWidth,
            events: {
                'onReady': (e)=>{
                    this.isPlayerOpen = true;
                    e.target.playVideo();
                }
            }
        });
    }

    bodyFixed(){
        let body = document.getElementsByTagName('body')[0];
        body.classList.add("fixed");   //add the class
    }

    bodyUnFixed(){
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("fixed");   //remove the class
    }
}