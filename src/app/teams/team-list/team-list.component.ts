import { Component, OnInit } from '@angular/core';

import { RestApiService } from './../../common/restapi.serivice';
import { Team } from './../../common/team/team';

@Component({
    selector: 'team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
    
    title: string = 'teams';
    listOfTeams: Team[];
    constructor(private apiService: RestApiService) {

    }
    ngOnInit() {
        this.listOfTeams = this.apiService.getListOfTeams();
    }
}