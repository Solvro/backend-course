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
    await mail.send((message) => {
      message
        .to('kn.solvro@pwr.edu.pl')
        .from('Elo żelo')
        .subject('Backend course smtp')
        .htmlView('emails/solvro_mail.edge')
    })
  }
}