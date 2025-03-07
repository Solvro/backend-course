import logger from '@adonisjs/core/services/logger'
import mail from '@adonisjs/mail/services/main'

export default class MailerControllerService {
  async sendEmail(email: string, subject: string, text: string) {
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
