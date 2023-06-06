const contactValidator = require('../middleware/validator/contacts')
const contctService = require('../services/contacts/contacts')

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

        const out = await contctService.userContactLinkService(email, phoneNumber)

        // Handle success case
        return res.status(200).
                set('Content-Type', 'application/json').
                send(out);
    }
}

const contactController = new ContactController()
module.exports = contactController
