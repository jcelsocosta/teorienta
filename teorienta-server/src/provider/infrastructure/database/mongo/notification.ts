import Notification from '../mongo/models/notification';
import User from '../mongo/models/user';
import Announcement from '../mongo/models/announcement';

export async function createNotification(notitication: any){

    
    let arrayCount: any[] = []
    let len: any;
    arrayCount = await Notification.find();
    len = arrayCount.length+1;
    if(len==0) len = 1;

    let newNotification = new Notification({
        _id: len,
        idAnnouncement: notitication.idAnnouncement,
        titleAnnouncement: notitication.titleAnnouncement,
        objectiveAnnouncement: notitication.objectiveAnnouncement,
        fomentationAnnouncement: notitication.fomentationAnnouncement,
        categoryAnnouncement: notitication.categoryAnnouncement,
        dateSubmissionAnnouncement: notitication.dateSubmissionAnnouncement,
        cnpjAnnouncement: notitication.cnpjAnnouncement,
        cpfAnnouncement: notitication.cpfAnnouncement,
        urlDocumentAnnouncement: notitication.urlDocumentAnnouncement,
        availableAnnouncement: notitication.availableAnnouncement,
        nameUser: notitication.nameUser,
        emailUser: notitication.emailUser,
        cpfUser: notitication.cpfUser,
        cnpjUser: notitication.cnpjUser,
        usernameUser: notitication.usernameUser

    })
    let response: any;

    response = await Notification.create(newNotification);
    return response;


}

export async function deleteNotification(objectId: any){
    let response:any;
    response = await Notification.deleteOne({"_id":objectId});
    return response;
}

export async function listNotification(){
    let response: any;
    response = await Notification.find();
    return response;
}

export async function listOneNotification(objectId: any){
    let response: any;
    response = await Notification.find({"titleAnnouncement":objectId})
    return response;   
}