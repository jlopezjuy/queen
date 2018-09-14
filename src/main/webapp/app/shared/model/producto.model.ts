import { IMarca } from 'app/shared/model//marca.model';
import { ICategoria } from 'app/shared/model//categoria.model';

export const enum Estado {
    NUEVO = 'NUEVO',
    USADO = 'USADO',
    REACONDICIONADO = 'REACONDICIONADO'
}

export interface IProducto {
    id?: number;
    nombre?: string;
    precio?: number;
    stock?: number;
    detalle?: string;
    visible?: boolean;
    estado?: Estado;
    marcas?: IMarca[];
    categorias?: ICategoria[];
}

export class Producto implements IProducto {
    constructor(
        public id?: number,
        public nombre?: string,
        public precio?: number,
        public stock?: number,
        public detalle?: string,
        public visible?: boolean,
        public estado?: Estado,
        public marcas?: IMarca[],
        public categorias?: ICategoria[]
    ) {
        this.visible = this.visible || false;
    }
}
