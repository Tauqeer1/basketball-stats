import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from './../common/common.module';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamsRoutingModule } from './teams.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        TeamsRoutingModule,
        CommonModule
    ],
    declarations: [
        TeamListComponent,
        TeamEditComponent
    ]
})

export class TeamsModule {

}