export interface IManagementRepository{
    createManagement(management: any): Promise<void>
}