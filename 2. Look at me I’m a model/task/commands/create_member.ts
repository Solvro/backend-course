import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Creates a new member of the organization'

  static options: CommandOptions = {}

  @args.string()
  declare firstName: string

  @args.string()
  declare lastName: string

  @args.string()
  declare status: string

  async run() {
    if (!['BREAK_IN', 'ACTIVE', 'NON_ACTIVE', 'HONORARY'].includes(this.status)) {
      throw new Error('Invalid status')
    }

    // console.log(`${this.firstName}, ${this.lastName}, ${this.status}`)

    console.log(db)
    await db.rawQuery('INSERT INTO members (firstName, lastName, status) VALUES (? ? ?);', [
      this.firstName,
      this.lastName,
      this.status,
    ])
  }
}
