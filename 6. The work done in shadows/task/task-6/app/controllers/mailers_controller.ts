import { createMailerValidator } from '#validators/mailer'
import { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import logger from '@adonisjs/core/services/logger'

export default class MailersController {
  async sendMail({ request }: HttpContext) {
    const payload = await createMailerValidator.validate(request.all())
    const { email, subject, text } = payload
    logger.info('Sending email to %s', email)

    await mail
      .sendLater((message) => {
        message.from('Elo zelo').to(email).subject(subject).text(text)
      })
      .then(() => {
        logger.info('Email sent')
        console.log('email sent')
      })
      .catch((error) => {
        logger.error('Email not sent')
        logger.error(error)
      })
  }
}
