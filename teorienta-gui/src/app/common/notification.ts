export class Notification {
    idAnnouncement: number;
    titleAnnouncement: string;
    objectiveAnnouncement: string;
    fomentationAnnouncement: number;
    categoryAnnouncement: string;
    dateSubmissionAnnouncement: string;
    cnpjAnnouncement: boolean;
    cpfAnnouncement: boolean;
    urlDocumentAnnouncement: string;
    availableAnnouncement: boolean;
    nameUser: string;
    emailUser: string;
    cpfUser: boolean;
    cnpjUser: boolean;
    usernameUser: string;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.idAnnouncement = 0;
        this.titleAnnouncement = '';
        this.objectiveAnnouncement = '';
        this.fomentationAnnouncement = 0;
        this.categoryAnnouncement = '';
        this.dateSubmissionAnnouncement = '';
        this.cnpjAnnouncement = false;
        this.cpfAnnouncement = false;
        this.urlDocumentAnnouncement = '';
        this.availableAnnouncement = false;
        this.nameUser = '';
        this.emailUser = '';
        this.cpfUser = false;
        this.cnpjUser = false;
        this.usernameUser = '';
    }

    copyFrom(notification: Notification): void {
        this.idAnnouncement = notification.idAnnouncement;
        this.titleAnnouncement = notification.titleAnnouncement;
        this.objectiveAnnouncement = notification.objectiveAnnouncement;
        this.fomentationAnnouncement = notification.fomentationAnnouncement;
        this.categoryAnnouncement = notification.categoryAnnouncement;
        this.dateSubmissionAnnouncement = notification.dateSubmissionAnnouncement;
        this.cnpjAnnouncement = notification.cnpjAnnouncement;
        this.cpfAnnouncement = notification.cpfAnnouncement;
        this.urlDocumentAnnouncement = notification.urlDocumentAnnouncement;
        this.availableAnnouncement = notification.availableAnnouncement;
        this.nameUser = notification.nameUser;
        this.emailUser = notification.emailUser;
        this.cpfUser = notification.cpfUser;
        this.cnpjUser = notification.cnpjAnnouncement;
        this.usernameUser = notification.usernameUser;
    }
}
