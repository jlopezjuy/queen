import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marca } from 'app/shared/model/marca.model';
import { MarcaService } from './marca.service';
import { MarcaComponent } from './marca.component';
import { MarcaDetailComponent } from './marca-detail.component';
import { MarcaUpdateComponent } from './marca-update.component';
import { MarcaDeletePopupComponent } from './marca-delete-dialog.component';
import { IMarca } from 'app/shared/model/marca.model';

@Injectable({ providedIn: 'root' })
export class MarcaResolve implements Resolve<IMarca> {
    constructor(private service: MarcaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((marca: HttpResponse<Marca>) => marca.body));
        }
        return of(new Marca());
    }
}

export const marcaRoute: Routes = [
    {
        path: 'marca',
        component: MarcaComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'queenApp.marca.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'marca/:id/view',
        component: MarcaDetailComponent,
        resolve: {
            marca: MarcaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'queenApp.marca.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'marca/new',
        component: MarcaUpdateComponent,
        resolve: {
            marca: MarcaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'queenApp.marca.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'marca/:id/edit',
        component: MarcaUpdateComponent,
        resolve: {
            marca: MarcaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'queenApp.marca.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const marcaPopupRoute: Routes = [
    {
        path: 'marca/:id/delete',
        component: MarcaDeletePopupComponent,
        resolve: {
            marca: MarcaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'queenApp.marca.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
