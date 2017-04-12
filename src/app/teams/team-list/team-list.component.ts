import { Component, OnInit } from '@angular/core';

import { Team } from './../shared/team';
import { MOCK_TEAM } from './../shared/mock-teams';

@Component({
    selector: 'team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
    title: string = 'teams';
    listOfTeams: Team[];
    constructor() {

    }
    ngOnInit() {
        this.listOfTeams = MOCK_TEAM;
    }
}