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
    console.log(this.lastName)
    console.log(this.status)

    await db.rawQuery(`
      INSERT INTO students (first_name, last_name, status) 
      VALUES (?, ?, ?)
    `, [this.firstName, this.lastName, this.status]);

  }
}