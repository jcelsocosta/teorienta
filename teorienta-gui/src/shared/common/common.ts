export function checkEmpty(field: any): boolean {
    if (field === undefined || field === '' || field === null) {
        return true;
    }
    return false;
}
