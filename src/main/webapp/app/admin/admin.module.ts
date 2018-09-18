import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { QueenSharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserMgmtDetailComponent,
    UserMgmtUpdateComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    QueenMetricsMonitoringModalComponent,
    QueenMetricsMonitoringComponent,
    QueenHealthModalComponent,
    QueenHealthCheckComponent,
    QueenConfigurationComponent,
    QueenDocsComponent,
    QueenTrackerComponent
} from './';

@NgModule({
    imports: [
        QueenSharedModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserMgmtDetailComponent,
        UserMgmtUpdateComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        QueenConfigurationComponent,
        QueenHealthCheckComponent,
        QueenHealthModalComponent,
        QueenDocsComponent,
        QueenTrackerComponent,
        QueenMetricsMonitoringComponent,
        QueenMetricsMonitoringModalComponent
    ],
    entryComponents: [UserMgmtDeleteDialogComponent, QueenHealthModalComponent, QueenMetricsMonitoringModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueenAdminModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
