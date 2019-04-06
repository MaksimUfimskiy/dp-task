import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
];

@NgModule({
    imports: [ ...materialModules ],
    exports: [ ...materialModules ],
})
export class MaterialImportsModule {
}
