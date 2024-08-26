import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class ModelsTask1Sql extends BaseCommand {
  static commandName = 'create:member'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const index: string = await this.prompt.ask('Enter member index')
    const firsName: string = await this.prompt.ask('Enter member first name')
    const lastName: string = await this.prompt.ask('Enter member last name')
    const status: string = await this.prompt.choice('Enter member status:', [
      'wdrożeniowy',
      'aktywny',
      'honorowy',
      'nieaktywny',
    ])

    await db.table('members').insert({
      index: index,
      first_name: firsName,
      last_name: lastName,
      status: status,
    })
    this.logger.info('Added new member')
  }
}
