function getEmails(bulkResponse){
    return []
}

function getPhoneNumbers(bulkResponse) {
    return []
}

function getSecondaryContactIds(bulkResponse) {
    return []
}

function getPrimaryId(bulkResponse) {
    // todo: Logic for getting Primary Ids 
    return 1
}


function contactsResponseGenerator(bulkResponse) {
    const primary_id = getPrimaryId(bulkResponse)


    return JSON.stringify({contact : {
        primaryContatctId : primary_id, 
        emails: getEmails(bulkResponse), // first element being email of primary contact 
        phoneNumbers: getPhoneNumbers(bulkResponse), // first element being phoneNumber of primary contact
        secondaryContactIds: getSecondaryContactIds(bulkResponse), // Array of all Contact IDs that are "secondary" to the primary contact
    }})
}

module.exports = contactsResponseGenerator