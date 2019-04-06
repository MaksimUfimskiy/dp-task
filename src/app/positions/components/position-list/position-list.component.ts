import { Component, Input } from '@angular/core';

import { Position } from '../../services/position.models';

@Component({
    selector: 'dp-position-list',
    templateUrl: './position-list.component.html',
    styleUrls: ['./position-list.component.css'],
})
export class PositionListComponent {

    @Input() positions: Position[];

}
