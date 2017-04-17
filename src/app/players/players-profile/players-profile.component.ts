import { Component, Input } from '@angular/core';
import { Player } from '../../common/players/player';


@Component({
    selector: 'player-profile',
    templateUrl: './players-profile.component.html',
    styleUrls: ['./players-profile.component.css']
})

export class PlayersProfileComponent {

    @Input()    
    selectedPlayer: Player;  //expose selectedPlayer for attribute binding (get input from )
    constructor() {
        // this.selectedPlayer = new Player("Lebron", "James", "SF", "6'8\"", "160")
    }

}