import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import SendEmail from '../app/jobs/send_email.js'

export default class SendMail extends BaseCommand {
  static commandName = 'send:mail'
  static description = 'command created to send mails'

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    await SendEmail.dispatch({}, {
      attempts: 3,
      delay: 1000
    })
  }
}