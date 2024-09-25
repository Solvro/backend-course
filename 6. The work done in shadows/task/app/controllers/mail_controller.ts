import type { HttpContext } from '@adonisjs/core/http'
import email_service from '#services/email_service'

export default class MailController {
    public async sendEmail({response}: HttpContext) {
        await email_service.sendCreativeMail()
        return response.send("Email has been sent")
    }
}