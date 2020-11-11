export class Notification{
    idAnnouncement: Number;
    titleAnnouncement: String;
    objectiveAnnouncement: String;
    fomentationAnnouncement: Number;
    categoryAnnouncement: String;
    dateSubmissionAnnouncement: String;
    cnpjAnnouncement: String;
    cpfAnnouncement: String;
    urlDocumentAnnouncement: String;
    availableAnnouncement: boolean;
    nameUser: String;
    emailUser: String;
    cpfUser: String;
    cnpjUser: String;
    usernameUser: String;

    constructor(){
        this.clean();
    }

    clean(){
       this.idAnnouncement = 0;
       this.titleAnnouncement = "";
       this.objectiveAnnouncement = "";
       this.fomentationAnnouncement = 0;
       this.categoryAnnouncement = "";
       this.dateSubmissionAnnouncement = "";
       this.cnpjAnnouncement = "";
       this.cpfAnnouncement = "";
       this.urlDocumentAnnouncement = "";
       this.availableAnnouncement = false;
       this.nameUser = "";
       this.emailUser = "";
       this.cpfUser = "";
       this.cnpjUser = "";
       this.usernameUser = "";

    }

    copyFrom(notification: Notification){
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