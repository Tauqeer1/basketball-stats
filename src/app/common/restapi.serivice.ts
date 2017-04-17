import { Injectable } from '@angular/core';

import { Team } from './team/team';
import { Player } from './players/player';

import { MOCK_TEAM } from './team/mock-teams';
import { MOCK_PLAYERS } from './players/mock-players';


@Injectable()
export class RestApiService {
    // listOfPlayers: Player[];

    getListOfPlayers(): Player[] {
        return MOCK_PLAYERS;
    }

    getListOfTeams(): Team[] {
        return MOCK_TEAM;
    }
}