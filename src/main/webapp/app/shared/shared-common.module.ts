import { NgModule } from '@angular/core';

import { QueenSharedLibsModule, FindLanguageFromKeyPipe, QueenAlertComponent, QueenAlertErrorComponent } from './';

@NgModule({
    imports: [QueenSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, QueenAlertComponent, QueenAlertErrorComponent],
    exports: [QueenSharedLibsModule, FindLanguageFromKeyPipe, QueenAlertComponent, QueenAlertErrorComponent]
})
export class QueenSharedCommonModule {}
