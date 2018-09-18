import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbDatepickerConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { QueenSharedModule } from 'app/shared';
import { QueenCoreModule } from 'app/core';
import { QueenAppRoutingModule } from './app-routing.module';
import { QueenHomeModule } from './home/home.module';
import { QueenAccountModule } from './account/account.module';
import { QueenEntityModule } from './entities/entity.module';
import * as moment from 'moment';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { QueenMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ActiveMenuDirective, ErrorComponent } from './layouts';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {AgmCoreModule} from '@agm/core';
import {SpinnerComponent} from 'app/shared/spinner.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};

@NgModule({
    imports: [
        BrowserModule,
        QueenAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'queen', separator: '-' }),
        QueenSharedModule,
        QueenCoreModule,
        QueenHomeModule,
        QueenAccountModule,
        QueenEntityModule,
        NgbModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        // PerfectScrollbarModule,
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0' })
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [SpinnerComponent, QueenMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [QueenMainComponent]
})
export class QueenAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
