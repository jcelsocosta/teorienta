export class Announcement{
    title: String;
    objective: String;
    fomentation: number;
    category: String;
    dateSubmission: String;
    cnpj: String;
    cpf: String;
    urlDocument: String;
    available: boolean;


    constructor () {
        this.clean();
    }

    clean(){
        this.title = "";
        this.objective = "";
        this.fomentation = 0;
        this.category = "";
        this.dateSubmission = "";
        this.cnpj = "";
        this.cpf = "";
        this.urlDocument = "";
        this.available = false;
    }
    copyAnnouncement(announcement: Announcement){
        this.title = announcement.title;
        this.objective = announcement.objective;
        this.fomentation = announcement.fomentation;
        this.category = announcement.category;
        this.dateSubmission = announcement.dateSubmission;
        this.cnpj = announcement.cnpj;
        this.cpf = announcement.cpf;
        this.urlDocument = announcement.urlDocument;
        this.available  = announcement.available;
    }
}