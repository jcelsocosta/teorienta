export class User{
    name: String;
    username:String;
    email: String;
    cnpj: String;
    cpf: String;
    password: String;
    userType: any;
    userTypeSelected: any;

    constructor(){
        this.clean();
    }

    clean(){
        this.name = "";
        this.username = "";
        this.email= "";
        this.cnpj = "";
        this.cpf = "";
        this.password = "";
        this.userType;
        this.userTypeSelected;
    }
}