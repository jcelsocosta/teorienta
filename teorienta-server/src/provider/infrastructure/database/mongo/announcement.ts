import Announcement from './models/announcement'


export async function createAnnouncement(announcement: any) {
    let arrayCount: any[] = []
    let len: any;
    arrayCount = await Announcement.find();
    len = arrayCount.length+1;
    if(len==0) len = 1;
    let newAnnouncement = new Announcement({
        _id: len,
        title: announcement.title,
        objective: announcement.objective ,
        fomentation: announcement.fomentation ,
        category: announcement.category ,
        dateSubmission: announcement.dateSubmission ,
        cnpj: announcement.cnpj,
        cpf: announcement.cpf,
        urlDocument: announcement.urlDocument,
        available: announcement.available
    });

    let response: any;

   response =  await Announcement.create(newAnnouncement);
   /*
        .then((announcement: any) => {
            response = { success: true, message: 'Announcement successfully stored.', announcement }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new announcement.', err }
        })*/

    return response;
}

export async function listAnnouncements() {
    
    let response: any;
    response = await Announcement.find({});
    console.log(response)
    /*
    await Announcement.find({})
        .then((announcements) => {
            response = { success: true, message: 'Announcements obtained successfully.', announcements }
        }).catch((err) => {
            response = { success: false, message: 'Failed to get the announcements.', err }
        })
        */
    return response;
}
export async function deleteAnnouncements(objectId: any){
    let response: any;
    
    response = await Announcement.deleteOne({"title":objectId});
    return response;
}

export async function updateAnnouncements(announcement: any){
    
    let ObjectId: any = announcement._id;
    let newAnnouncement = {
        title: announcement.title,
        objective: announcement.objective ,
        fomentation: announcement.fomentation ,
        category: announcement.category ,
        dateSubmission: announcement.dateSubmission ,
        cnpj: announcement.cnpj,
        cpf: announcement.cpf,
        urlDocument: announcement.urlDocument,
        available: announcement.available
    };
    let response: any
    response = await Announcement.update({"_id":ObjectId},
    {"title":newAnnouncement.title,
    "objective": newAnnouncement.objective,
    "fomentation": newAnnouncement.fomentation,
    "category": newAnnouncement.category,
    "dateSubmission": newAnnouncement.dateSubmission,
    "cnpj": newAnnouncement.cnpj,
    "cpf": newAnnouncement.cpf,
    "urlDocument": newAnnouncement.urlDocument,
    "available": newAnnouncement.available
    });
    return response;
}