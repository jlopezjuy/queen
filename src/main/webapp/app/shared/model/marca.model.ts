import { IProducto } from 'app/shared/model//producto.model';

export interface IMarca {
    id?: number;
    nombre?: string;
    logoContentType?: string;
    logo?: any;
    productos?: IProducto[];
}

export class Marca implements IMarca {
    constructor(
        public id?: number,
        public nombre?: string,
        public logoContentType?: string,
        public logo?: any,
        public productos?: IProducto[]
    ) {}
}
