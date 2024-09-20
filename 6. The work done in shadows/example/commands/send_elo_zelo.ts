import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import mail from '@adonisjs/mail/services/main'
import SendEmail from '../app/jobs/send_email.js'

export default class SendEloZelo extends BaseCommand {
  static commandName = 'send:elo-zelo'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    await SendEmail.dispatch({})
    // await mail.send((message) => {
    //   message
    //     .to('273905@student.pwr.edu.pl')
    //     .from('Elo żelo')
    //     .subject('Important Elo żelo')
    //     .text('Elo żelo, elo żelo')
    // })
  }
}
