import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { QueenEmpresaModule } from './empresa/empresa.module';
import { QueenCategoriaModule } from './categoria/categoria.module';
import { QueenMarcaModule } from './marca/marca.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        QueenEmpresaModule,
        QueenCategoriaModule,
        QueenMarcaModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueenEntityModule {}
