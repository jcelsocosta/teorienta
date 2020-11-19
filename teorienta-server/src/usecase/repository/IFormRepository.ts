export interface IFormRepository{
    createForm(form: any): Promise<void>
}