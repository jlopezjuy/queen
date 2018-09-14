import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { IMarca } from 'app/shared/model/marca.model';
import { MarcaService } from './marca.service';

@Component({
    selector: 'jhi-marca-update',
    templateUrl: './marca-update.component.html'
})
export class MarcaUpdateComponent implements OnInit {
    private _marca: IMarca;
    isSaving: boolean;

    constructor(
        private dataUtils: JhiDataUtils,
        private marcaService: MarcaService,
        private elementRef: ElementRef,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
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

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.marca, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.marca.id !== undefined) {
            this.subscribeToSaveResponse(this.marcaService.update(this.marca));
        } else {
            this.subscribeToSaveResponse(this.marcaService.create(this.marca));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IMarca>>) {
        result.subscribe((res: HttpResponse<IMarca>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get marca() {
        return this._marca;
    }

    set marca(marca: IMarca) {
        this._marca = marca;
    }
}
