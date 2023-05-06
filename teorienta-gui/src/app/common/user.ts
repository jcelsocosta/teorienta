export class User {
    name: string;
    username: string;
    email: string;
    cnpj: string;
    cpf: string;
    password: string;
    userType: any;
    userTypeSelected: any;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.name = '';
        this.username = '';
        this.email = '';
        this.cnpj = '';
        this.cpf = '';
        this.password = '';
        this.userType = undefined;
        this.userTypeSelected = undefined;
    }
}
