import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Position } from './positions/services/position.models';
import { PositionsService } from './positions/services/positions.service';
import { PositionSearchTerm } from './positions/components/position-search/position-search.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {

    public positions: Position[];
    public roles: string[];

    private destroySubject$: Subject<void> = new Subject();

    constructor(private positionService: PositionsService) {}

    ngOnInit(): void {
        this.positionService
            .getPositions()
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((positions: Position[]) => {
                this.positions = positions;
            });

        this.positionService
            .getRoles()
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((roles: string[]) => {
                this.roles = [ 'All', ...roles ];
            });
    }

    ngOnDestroy(): void {
        this.destroySubject$.next();
        this.destroySubject$.complete();
    }

    public onSearch(searchTerm: PositionSearchTerm): void {
        this.positionService
            .getPositions()
            .pipe(
                map((positions: Position[]) => {
                    return positions.filter((position: Position) => {
                        if (searchTerm.role !== 'All' && searchTerm.role !== position.role) {
                            return false;
                        }

                        return position.firstName.toLocaleLowerCase().includes(searchTerm.searchText.toLocaleLowerCase()) ||
                            position.lastName.toLocaleLowerCase().includes(searchTerm.searchText.toLocaleLowerCase());
                    });
                }),
                takeUntil(this.destroySubject$))
            .subscribe((positions: Position[]) => {
                this.positions = positions;
            });
    }
}
