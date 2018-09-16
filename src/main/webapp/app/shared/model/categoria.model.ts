import { IProducto } from 'app/shared/model//producto.model';

export interface ICategoria {
    id?: number;
    nombre?: string;
    visible?: boolean;
    productos?: IProducto[];
}

export class Categoria implements ICategoria {
    constructor(public id?: number, public nombre?: string, public visible?: boolean, public productos?: IProducto[]) {
        this.visible = this.visible || false;
    }
}
