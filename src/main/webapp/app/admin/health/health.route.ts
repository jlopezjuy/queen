import { Route } from '@angular/router';

import { QueenHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'queen-health',
    component: QueenHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
