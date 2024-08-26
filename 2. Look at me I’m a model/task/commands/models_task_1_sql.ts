import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class ModelsTask1Sql extends BaseCommand {
  static commandName = 'create:member'
  static description = ''

  @args.string()
  declare index: string
  @args.string()
  declare first_name: string
  @args.string()
  declare last_name: string
  @args.string()
  declare status: 'wdrożeniowy' | 'aktywny' | 'honorowy' | 'nieaktywny'

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    await db.table('members').insert({
      index: this.index,
      first_name: this.first_name,
      last_name: this.last_name,
      status: this.status,
    })
    this.logger.info('Added new member')
  }
}
