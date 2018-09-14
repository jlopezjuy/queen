import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IMarca } from 'app/shared/model/marca.model';

@Component({
    selector: 'jhi-marca-detail',
    templateUrl: './marca-detail.component.html'
})
export class MarcaDetailComponent implements OnInit {
    marca: IMarca;

    constructor(private dataUtils: JhiDataUtils, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ marca }) => {
            this.marca = marca;
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }
}
