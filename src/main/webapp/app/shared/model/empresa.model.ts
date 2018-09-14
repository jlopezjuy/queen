export interface IEmpresa {
    id?: number;
    nombre?: string;
    direccion?: string;
    telefono?: string;
    cuit?: string;
    rentas?: string;
    userLogin?: string;
    userId?: number;
}

export class Empresa implements IEmpresa {
    constructor(
        public id?: number,
        public nombre?: string,
        public direccion?: string,
        public telefono?: string,
        public cuit?: string,
        public rentas?: string,
        public userLogin?: string,
        public userId?: number
    ) {}
}
