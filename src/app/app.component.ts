import { Component, OnInit } from '@angular/core';

import { Position } from './positions/services/position.models';
import { PositionsService } from './positions/services/positions.service';
import { PositionSearchTerm } from './positions/components/position-search/position-search.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

    public positions: Position[];
    public roles: string[];

    constructor(private positionService: PositionsService) {}

    ngOnInit() {
        this.positionService
            .getPositions()
            .subscribe((positions: Position[]) => {
                this.positions = positions;
            });

        this.positionService
            .getRoles()
            .subscribe((roles: string[]) => {
                this.roles = [ 'All', ...roles ];
            });
    }

    public onSearch(searchTerm: PositionSearchTerm): void {
        this.positionService
            .filterPositions(searchTerm.searchText, searchTerm.role)
            .subscribe((positions: Position[]) => {
                this.positions = positions;
            });
    }
}
