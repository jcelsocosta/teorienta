export class Announcement{
    _id:Number;
    title: String;
    objective: String;
    fomentation: number;
    category: String;
    dateSubmission: String;
    cnpj: Boolean;
    cpf: Boolean;
    urlDocument: String;
    available: boolean;
    question: String;

    constructor () {
        this.clean();
    }

    clean(){
        this.title = "";
        this.objective = "";
        this.fomentation = 0;
        this.category = "";
        this.dateSubmission = "";
        this.cnpj = false;
        this.cpf = false;
        this.urlDocument = "";
        this.available = false;
        this.question = "";
    }
    copyAnnouncement(announcement: Announcement){
        this._id = announcement._id;
        this.title = announcement.title;
        this.objective = announcement.objective;
        this.fomentation = announcement.fomentation;
        this.category = announcement.category;
        this.dateSubmission = announcement.dateSubmission;
        this.cnpj = announcement.cnpj;
        this.cpf = announcement.cpf;
        this.urlDocument = announcement.urlDocument;
        this.available  = announcement.available;
        this.question = announcement.question;
    }
}