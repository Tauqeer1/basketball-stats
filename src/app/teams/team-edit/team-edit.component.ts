import { Component, Input } from '@angular/core';
import { Team } from './../../common/team/team';

@Component({
    selector: 'team-edit',
    templateUrl: './team-edit.component.html',
    styleUrls: ['./team-edit.component.css']
})

export class TeamEditComponent {

    @Input()
    selectedTeam: Team
    constructor() {}

    saveTeam() {
        console.log('saving team');
        this.selectedTeam = null;
    }
}