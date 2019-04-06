import { PositionsService } from './positions.service';
import { Position } from './position.models';

describe('PositionsService', () => {
    let service: PositionsService;

    beforeEach(() => {
        service = new PositionsService();
    });

    it('#getPositions should return list of all positions from observable',
        (done: DoneFn) => {
            service.getPositions().subscribe(value => {
                expect(value).toBeTruthy();
                done();
            });
        });

    it('#getRoles should return list of all roles from observable',
        (done: DoneFn) => {
            service.getRoles().subscribe(value => {
                expect(value).toBeTruthy();
                done();
            });
        });

    it('#filterPositions should return filtered list of positions from observable',
        (done: DoneFn) => {
            service.filterPositions('Max', 'All').subscribe(value => {
                expect(value[0]).toEqual(<Position>{
                    firstName: 'Max',
                    lastName: 'Ufimsky',
                    role: 'Frontend Dev',
                });
                done();
            });
        });
});
