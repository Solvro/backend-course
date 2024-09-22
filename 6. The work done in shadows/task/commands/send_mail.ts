import SolvroNotification from '#mails/solvro_notification'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import mail from '@adonisjs/mail/services/main'

export default class SendMail extends BaseCommand {
  static commandName = 'send:mail'
  static description = 'command created to send mails'

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    await mail.send(new SolvroNotification)
  }
}