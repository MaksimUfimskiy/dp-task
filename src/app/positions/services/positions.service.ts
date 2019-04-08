import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Position } from './position.models';

@Injectable()
export class PositionsService {

    public getPositions(): Observable<Position[]> {
        return of(positionsMock);
    }

    public getRoles(): Observable<string[]> {
        const roleMap = positionsMock.reduce((result, position) => {
            result[position.role] = null;
            return result;
        }, {});

        return of(Object.keys(roleMap));
    }

    public filterPositions(searchText: string, role: string): Observable<Position[]> {
        return of(positionsMock.filter((position: Position) => {
            if (role !== 'All' && role !== position.role) {
                return false;
            }
            return position.firstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
                position.lastName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
        }));
    }
}

const positionsMock: Position[] = [
    {
        firstName: 'Dmitry',
        lastName: 'Popov',
        role: 'Super Frontend Dev'
    },
    {
        firstName: 'Max',
        lastName: 'Ufimsky',
        role: 'Frontend Dev'
    },
    {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        role: 'Backend Dev'
    },
    {
        firstName: 'Dude',
        lastName: 'Lebovski',
        role: 'Just Dude'
    },
    {
        firstName: 'Kent',
        lastName: 'Mills',
        role: 'Frontend Dev'
    },
    {
        firstName: 'Lynne',
        lastName: 'Cooper',
        role: 'Frontend Dev'
    },
    {
        firstName: 'Larry',
        lastName: 'Moore',
        role: 'Frontend Dev'
    },
    {
        firstName: 'Allen',
        lastName: 'Raynor',
        role: 'Backend Dev'
    },
    {
        'firstName': 'Danny',
        'lastName': 'Wang',
        'role': 'Backend Dev'
    },
    {
        firstName: 'Janet',
        lastName: 'Hanna',
        role: 'DevOps'
    }
];
