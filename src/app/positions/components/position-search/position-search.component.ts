import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, startWith, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subject, combineLatest  } from 'rxjs';

import { PositionSearchTerm } from './position-search.model';

@Component({
    selector: 'dp-position-search',
    templateUrl: './position-search.component.html',
    styleUrls: [ 'position-search.component.css' ],
})
export class PositionSearchComponent implements OnInit, OnDestroy {

    @Input() roles: string[];
    @Output() searched = new EventEmitter<PositionSearchTerm>();

    public searchText = new FormControl('');
    public role = new FormControl('All');

    private destroySubject$: Subject<void> = new Subject();

    ngOnInit(): void {
        const searchText$ = this.searchText.valueChanges.pipe(
            startWith(''),
            debounceTime(500),
            distinctUntilChanged()
        );
        const role$ = this.role.valueChanges.pipe(startWith('All'));

        combineLatest(searchText$, role$)
            .pipe(takeUntil(this.destroySubject$))
            .subscribe(([ searchText, role ]) => {
                this.updateSearchTerms(searchText, role);
            });

    }

    ngOnDestroy(): void {
        this.destroySubject$.next();
        this.destroySubject$.complete();
    }

    private updateSearchTerms(searchText: string, role: string): void {
        this.searched.emit({
            searchText,
            role,
        });
    }
}
