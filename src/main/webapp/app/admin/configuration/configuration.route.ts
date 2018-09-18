import { Route } from '@angular/router';

import { QueenConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'queen-configuration',
    component: QueenConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
