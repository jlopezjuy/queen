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
}

export class Producto implements IProducto {
    constructor(
        public id?: number,
        public nombre?: string,
        public precio?: number,
        public stock?: number,
        public detalle?: string,
        public visible?: boolean,
        public estado?: Estado
    ) {
        this.visible = this.visible || false;
    }
}
