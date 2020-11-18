async function checkEmpty(field: any) {
    return field == null || field == undefined || field == ''
}

export {
    checkEmpty
}