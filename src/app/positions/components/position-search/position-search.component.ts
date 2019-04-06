import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { PositionSearchTerm } from './position-search.model';

@Component({
    selector: 'dp-position-search',
    templateUrl: './position-search.component.html',
    styleUrls: [ 'position-search.component.css' ],
})
export class PositionSearchComponent implements OnInit {

    @Input() roles: string[];
    @Output() searched = new EventEmitter<PositionSearchTerm>();

    public searchText = new FormControl('');
    public role = new FormControl('All');


    ngOnInit(): void {
        this.searchText.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe(() => {
            this.updateSearchTerms();
        });

        this.role.valueChanges.subscribe(() => this.updateSearchTerms());
    }

    private updateSearchTerms(): void {
        this.searched.emit({
            searchText: this.searchText.value,
            role: this.role.value,
        });
    }
}
