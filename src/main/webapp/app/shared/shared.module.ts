import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { QueenSharedLibsModule, QueenSharedCommonModule, QueenLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [QueenSharedLibsModule, QueenSharedCommonModule],
    declarations: [QueenLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [QueenLoginModalComponent],
    exports: [QueenSharedCommonModule, QueenLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueenSharedModule {}
