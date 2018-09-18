import { Route } from '@angular/router';

import { QueenDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: QueenDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
