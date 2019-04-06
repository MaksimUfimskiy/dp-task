import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PositionsModule } from './positions/positions.module';
import { MaterialImportsModule } from './material-imports/material-imports.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialImportsModule,
        PositionsModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
