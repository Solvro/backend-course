import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import mail from '@adonisjs/mail/services/main'

export default class SendEloZelo extends BaseCommand {
  static commandName = 'send:view-page'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    await mail.send((message) => {
      const startTime = new Date()
      const endTime = new Date()
      endTime.setHours(startTime.getHours() + 1)
      // message.icalEvent(
      //   (calendar) => {
      //     calendar.createEvent({
      //       summary: 'Meeting for Elo Żelo',
      //       start: startTime,
      //       end: endTime,
      //     })
      //   },
      //   {
      //     method: 'PUBLISH',
      //     filename: 'invite.ics',
      //   }
      // )

      message
        .to('273905@student.pwr.edu.pl')
        .from('Elo żelo 4')
        .cc('...')
        .subject('Important Elo żelo 4')
        .htmlView('emails/solvro_promo')
    })
  }
}
