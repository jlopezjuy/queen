export interface IMarca {
    id?: number;
    nombre?: string;
    logoContentType?: string;
    logo?: any;
}

export class Marca implements IMarca {
    constructor(public id?: number, public nombre?: string, public logoContentType?: string, public logo?: any) {}
}
