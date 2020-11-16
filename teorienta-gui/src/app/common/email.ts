export class Email{
    to: String;
    subject: String;
    message: String;


    constructor(to:String,subject:String,message:String){
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    clean(){
        this.to = "";
        this.subject = "";
        this.message = "";
    }
    copy(to:String,subject:String,message:String){
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    
} 