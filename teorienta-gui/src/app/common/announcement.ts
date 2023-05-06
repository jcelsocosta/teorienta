export class Announcement {
    _id: number;
    title: string;
    objective: string;
    fomentation: number;
    category: string;
    dateSubmission: string;
    cnpj: boolean;
    cpf: boolean;
    urlDocument: string;
    available: boolean;
    question: string;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.title = '';
        this.objective = '';
        this.fomentation = 0;
        this.category = '';
        this.dateSubmission = '';
        this.cnpj = false;
        this.cpf = false;
        this.urlDocument = '';
        this.available = false;
        this.question = '';
    }

    copyAnnouncement(announcement: Announcement): void {
        this._id = announcement._id;
        this.title = announcement.title;
        this.objective = announcement.objective;
        this.fomentation = announcement.fomentation;
        this.category = announcement.category;
        this.dateSubmission = announcement.dateSubmission;
        this.cnpj = announcement.cnpj;
        this.cpf = announcement.cpf;
        this.urlDocument = announcement.urlDocument;
        this.available = announcement.available;
        this.question = announcement.question;
    }
}
