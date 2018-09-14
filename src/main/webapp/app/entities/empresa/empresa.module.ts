import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QueenSharedModule } from 'app/shared';
import { QueenAdminModule } from 'app/admin/admin.module';
import {
    EmpresaComponent,
    EmpresaDetailComponent,
    EmpresaUpdateComponent,
    EmpresaDeletePopupComponent,
    EmpresaDeleteDialogComponent,
    empresaRoute,
    empresaPopupRoute
} from './';

const ENTITY_STATES = [...empresaRoute, ...empresaPopupRoute];

@NgModule({
    imports: [QueenSharedModule, QueenAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EmpresaComponent,
        EmpresaDetailComponent,
        EmpresaUpdateComponent,
        EmpresaDeleteDialogComponent,
        EmpresaDeletePopupComponent
    ],
    entryComponents: [EmpresaComponent, EmpresaUpdateComponent, EmpresaDeleteDialogComponent, EmpresaDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueenEmpresaModule {}
