export class Email{
    to: String;
    subject: String;
    message: String;


    constructor(){
        this.clean();
    }

    clean(){
        this.to = "";
        this.subject = "";
        this.message = "";
    }

} 