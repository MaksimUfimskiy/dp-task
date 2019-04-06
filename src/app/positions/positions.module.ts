import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { PositionsService } from './services/positions.service';
import { PositionListComponent } from './components/position-list/position-list.component';
import { PositionSearchComponent } from './components/position-search/position-search.component';

@NgModule({
    declarations: [
        PositionListComponent,
        PositionSearchComponent,
    ],
    providers: [
        PositionsService
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialImportsModule,
        ReactiveFormsModule,
    ],
    exports: [
        PositionListComponent,
        PositionSearchComponent,
        CommonModule,
    ],
})
export class PositionsModule {}
