const contactDao = require('../../dao/contact')
const {response} = require('../../utils/common')
const contactsResponseGenerator = require('./conv')

class ContactService {
    constructor() { }

    async getUserContactsHistory(id) {
        const orFilter = [
            { id: id },
            { linkedId: id },
        ]

        const out = await contactDao.getOr(orFilter)
        console.log(out)

    }

    async userContactLinkService(email, phoneNumber) {

        const orFilter = [
            { phoneNumber: phoneNumber },
            { email: email },
        ]

        // const out = await contactDao.getOr(orFilter)
        // console.log(out)

        const out = await contactDao.getOr(orFilter)
        if(out.error) {
            response['error'] = out.error
            return response
        }

        return contactsResponseGenerator(out)

        
        // Check if the required Contact is present 
        // If not Present:
        // Create a new entry 
        // Get the Response after dto 
        // If Present (any one), 
        // If only one is present in 
        // if present: 
        // If both email and phone number are present 
        // Create New Entry with primary 
        // If one of email or phone number is present 
        // Get the last update data 
    }
}

const contactService = new ContactService()
module.exports = contactService