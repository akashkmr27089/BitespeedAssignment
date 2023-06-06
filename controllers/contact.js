const contactValidator = require('../middleware/validator/contacts')
const contctService = require('../services/contacts')

class ContactController {
    async linkUserPurchase(req, res) {
        const { error, value } = contactValidator.validate(req.body);
        if (error) {
            // Handle validation error
            return res.status(400).json({ error: error.details[0].message });
        }

        const reqBodyKeys = Object.keys(req.body)
        if(!reqBodyKeys.includes('email') && (!reqBodyKeys.includes('phoneNumber'))) {
            return res.status(400).json({ error: 'should contain either email or phoneNumber' })
        }

        const email = value.email
        const phoneNumber = value.phoneNumber

        contctService.userContactLinkService(email, phoneNumber)

        // Handle success case
        return res.status(200).json({ message: 'Request body is valid!', recivedData: JSON.stringify(req.body) });
    }
}

const contactController = new ContactController()
module.exports = contactController
