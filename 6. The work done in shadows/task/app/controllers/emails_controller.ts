import EmailService from "#services/email_service";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

export default class EmailsController {
    @inject()
    async sendEmail({response}: HttpContext, emailService: EmailService) {
        const recipient = 'kn.solvro@pwr.edu.pl'
        await emailService.sendCreativeEmail(recipient, 'emails/creative_email', { name: 'Solvro Team' })
        return response.send('Email has been sent successfully!')
    }

    @inject()
    async sendEmailWithAdvancedView({response}: HttpContext, emailService: EmailService) {
        const recipient = 'kn.solvro@pwr.edu.pl'
        await emailService.sendCreativeEmail(recipient, 'emails/email_view_mjml', { name: 'Member' })
        return response.send('Email has been sent successfully!')
    }
}