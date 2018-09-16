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
    empresaId?: number;
    marcaId?: number;
    categoriaId?: number;
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
        public empresaId?: number,
        public marcaId?: number,
        public categoriaId?: number
    ) {
        this.visible = this.visible || false;
    }
}
