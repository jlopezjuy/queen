import {Component, OnDestroy, OnInit} from '@angular/core';
import {
    Router,
    ActivatedRouteSnapshot,
    NavigationEnd,
    NavigationStart,
    NavigationCancel,
    NavigationError
} from '@angular/router';

import { JhiLanguageHelper } from 'app/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
    selector: 'queen-main',
    templateUrl: './main.component.html'
})
export class QueenMainComponent implements OnInit, OnDestroy {
    private sub: any;

    constructor(private slimLoader: SlimLoadingBarService, private jhiLanguageHelper: JhiLanguageHelper, private router: Router) {
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.slimLoader.start();
            } else if ( event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError) {
                this.slimLoader.complete();
            }
        }, (error: any) => {
            this.slimLoader.complete();
        });
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'queenApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }

    ngOnDestroy(): any {
        this.sub.unsubscribe();
    }
}
