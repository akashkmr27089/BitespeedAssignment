class ContactService {
    constructor() {}

    async userContactLinkService(email, phoneNumber) {
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


        // Response 
        // ```
        //     {
        //         "contact":{
        //             "primaryContatctId": number,
        //             "emails": string[], // first element being email of primary contact 
        //             "phoneNumbers": string[], // first element being phoneNumber of primary contact
        //             "secondaryContactIds": number[] // Array of all Contact IDs that are "secondary" to the primary contact
        //         }
        //     }
        // ```
        return 
    }
}

const contactService = new ContactService()
module.exports = contactService