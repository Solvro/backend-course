import { createMailerValidator } from '#validators/mailer'
import { HttpContext } from '@adonisjs/core/http'
import MailerControllerService from '#services/send_mail'
import { inject } from '@adonisjs/core'

export default class MailersController {
  @inject()
  async sendMail({ request }: HttpContext, mailerControllerService: MailerControllerService) {
    const payload = await createMailerValidator.validate(request.all())
    const { email, subject, text } = payload

    await mailerControllerService.sendEmail(email, subject, text)
  }
}
