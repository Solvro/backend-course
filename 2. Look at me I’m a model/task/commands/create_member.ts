import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string()
  declare firstName: string

  @args.string()
  declare lastName: string

  @args.string({ default: 'active' })
  declare status: string

  async run() {
    console.log(this.firstName)
    await db.table('students')
    .insert({
      first_name: this.firstName,
      last_name: this.lastName,
      status: this.status
    })

  }
}