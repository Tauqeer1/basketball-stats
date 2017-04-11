import { Routes } from '@angular/router';
import { TeamListComponent } from '../teams/team-list/team-list.component';
import { PlayerListComponent } from '../players/player-list/player-list.component';


export const appRoutes: Routes = [
    {path: 'teams', component: TeamListComponent},
    {path: 'players', component: PlayerListComponent},
    {path: '', component: PlayerListComponent}
]