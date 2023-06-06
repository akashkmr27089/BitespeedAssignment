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

        return await contactDao.getOr(orFilter)
    }

    async userContactLinkService(email, phoneNumber) {

        // const orFilter = [
        //     { phoneNumber: phoneNumber },
        //     { email: email },
        // ]

        // const out = await contactDao.getOr(orFilter)
        // console.log(out)


        const id = 3 // How to get Root Primary
        const out = await this.getUserContactsHistory(id)
        if(out.error) {
            response['error'] = out.error
            return response
        }

        return contactsResponseGenerator(out.data)

        
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