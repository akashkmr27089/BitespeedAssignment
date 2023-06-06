const Sequelize = require('sequelize');
const Contacts = require('../models/contacts');
const response = require('../utils/common')

class ContactDao {
    constructor() { }

    async getOr(filter) {
        return await Contacts.findAll({
            where: {
                [Sequelize.Op.or]: filter,
            },
        }).then((result) => {
            response["data"] = result 
            return response
        }).catch((error) => {
            response["error"] = error
            return response
        });
    }

    async getAnd(filter) {
        return await Contacts.findAll({
            where: {
                [Sequelize.Op.and]: filter,
            },
        }).then((result) => {
            response["data"] = result 
            return response
        }).catch((error) => {
            response["error"] = error
            return response
        });
    }

}

const contactDao = new ContactDao()
module.exports = contactDao



// [
//     { phoneNumber: filter.phoneOrEmail },
//     { email: filter.phoneOrEmail },
//   ],