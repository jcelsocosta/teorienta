import {CreateNotificationUseCaseRepository,DeleteNotificationUseCaseRepository,ListOneNotificationUseCaseRepository,ListNotificationUseCaseRepository} from '../../provider/repository/notification';

import {CreateNotificationUseCase,DeleteNotificationUseCase,ListNotificationUseCase,ListOneNotificationUseCase} from '../../usecase/notification';



export async function createNotification(notification: any) {

    const repository = new CreateNotificationUseCaseRepository()
    const usecase = new CreateNotificationUseCase(repository)

    return await usecase.createNotification(notification);
}

export async function listNotification() {
    const repository = new ListNotificationUseCaseRepository()
    const usecase = new ListNotificationUseCase(repository)

    return await usecase.listNotification()
}
export async function listOneNotification(objectId: any){

    const repository = new ListOneNotificationUseCaseRepository()
    const usecase = new ListOneNotificationUseCase(repository)
    return await usecase.listOneNotification(objectId);
}

export async function deleteNotification(objectId: any){
    const repository = new DeleteNotificationUseCaseRepository();
    const usecase = new DeleteNotificationUseCase(repository);
    return await usecase.deleteNotification(objectId); 
}


