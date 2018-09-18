import { Route } from '@angular/router';

import { QueenTrackerComponent } from './tracker.component';

export const trackerRoute: Route = {
    path: 'queen-tracker',
    component: QueenTrackerComponent,
    data: {
        pageTitle: 'tracker.title'
    }
};
