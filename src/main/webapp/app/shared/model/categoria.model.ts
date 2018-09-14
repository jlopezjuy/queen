export interface ICategoria {
    id?: number;
    nombre?: string;
    visible?: boolean;
}

export class Categoria implements ICategoria {
    constructor(public id?: number, public nombre?: string, public visible?: boolean) {
        this.visible = this.visible || false;
    }
}
