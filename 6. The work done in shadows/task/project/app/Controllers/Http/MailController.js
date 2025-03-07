'use strict'

import CreativeMail from 'App/Mail/CreativeMail'

class MailController {
    async sendMail() {
        await new CreativeMail().send()
    }
}

module.exports = MailController
