import { Route } from '@angular/router';

import { QueenMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'queen-metrics',
    component: QueenMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
