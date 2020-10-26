import Form from './models/form'

export async function createForm(form: any) {
    let newForm = new Form({
        question: form.question,
        answer: form.answer
    })

    let response: any

    await Form.create(newForm)
        .then((form) => {
            response = { success: true, message: 'Form successfully stored.', form }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new form.', err }
        })

    return response
}
