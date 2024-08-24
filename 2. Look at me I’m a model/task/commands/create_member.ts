import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Create a member'

  static options: CommandOptions = { startApp: true }

  @args.string({ description: 'Index of the member' })
  declare index: string

  @args.string({ description: 'First name of the member' })
  declare firstName: string

  @args.string({ description: 'Last name of the member' })
  declare lastName: string

  @args.string({ description: 'Status of the member' })
  declare status: string

  async run() {
    await db.rawQuery(
      'INSERT INTO members (index, first_name, last_name, status) VALUES (:index, :firstName, :lastName, :status)',
      {
        index: this.index,
        firstName: this.firstName,
        lastName: this.lastName,
        status: this.status,
      }
    )
  }
}
