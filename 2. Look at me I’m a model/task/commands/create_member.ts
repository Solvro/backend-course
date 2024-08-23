import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Create a Solvro member giving necessary args'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string()
  declare index: string

  @args.string()
  declare firstName: string

  @args.string()
  declare lastName: string

  static allowedStatus = ['trainee', 'active', 'inactive', 'honorary']
  @args.string({
    required: false,
    description: `Allowed member status: [${CreateMember.allowedStatus}]`,
  })
  declare status: string

  async run() {
    await db.rawQuery(
      `INSERT INTO solvro_members (index, first_name, last_name, status)
      VALUES (:index, :first_name, :last_name, :status)`,
      {
        index: this.index,
        first_name: this.firstName,
        last_name: this.lastName,
        status: this.status
          ? this.status.charAt(0).toUpperCase() + this.status.slice(1).toLowerCase() //Values in status db TYPE start with upper case letter...
          : null,
      }
    )
  }
  async completed() {
    if (this.error) {
      this.logger.error(this.error.message)
      return true
    } else {
      console.log(`Solvro member {${this.parsed.args}} was succesfully created.`)
    }
  }
}
