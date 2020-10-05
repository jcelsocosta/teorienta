const Form = require('./entities/form')

async function createForm(form) {
    let newForm = new Form({
        answer : form.answer
    })

    let response

    await Form.create(newForm)
        .then((form) => {
            response = { success: true, message: 'Form successfully stored.', form }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new form.', err }
        })

    return response
}

module.exports = {
    createForm
}
