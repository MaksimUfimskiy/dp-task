import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PositionsService } from './positions/services/positions.service';

describe('AppComponent', () => {

    let comp: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                AppComponent,
                PositionsService
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();

        comp = TestBed.get(AppComponent);
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should init data`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);

        comp.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(comp.positions).toBeTruthy();
            expect(comp.roles).toBeTruthy();
        });
    }));

    it('should render div.content-wrapper tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.content-wrapper')).toBeTruthy();
    }));
});
