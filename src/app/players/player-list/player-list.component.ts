import { Component, OnInit } from '@angular/core';

import { RestApiService } from './../../common/restapi.serivice';
import { Player } from '../../common/players/player';

@Component({
    selector: 'player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {

    listOfPlayers: Player[];
    title: string = 'Players';

    constructor(private apiService: RestApiService) {

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.listOfPlayers = this.apiService.getListOfPlayers();
    }

}