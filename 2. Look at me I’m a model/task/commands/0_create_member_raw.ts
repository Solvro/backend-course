import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberRaw extends BaseCommand {
  static commandName = 'create:member-raw'
  static description = 'Creates a member using a raw SQL query'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string()
  declare firstName: string

  @args.string()
  declare lastName: string

  @args.string()
  declare status: string

  private STATUSES = ['ACTIVE', 'NON_ACTIVE', 'BREAK_IN', 'HONORARY']

  async run() {
    if (!this.STATUSES.includes(this.status)) throw new Error('Invalid status')
    try {
      await db.rawQuery('INSERT INTO members (first_name, last_name, status) VALUES (?, ?, ?);', [
        this.firstName,
        this.lastName,
        this.status,
      ])
    } catch (error) {
      console.error(`Error inserting new member: ${error}`)
    }
  }
}
