import { Component, OnInit } from '@angular/core';

import { Player } from './../shared/player';
import { MOCK_PLAYERS } from './../shared/mock-players';

@Component({
    selector: 'player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {

    listOfPlayers: Player[];
    title: string = 'Players';

    constructor() {

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.listOfPlayers = MOCK_PLAYERS;
    }

}