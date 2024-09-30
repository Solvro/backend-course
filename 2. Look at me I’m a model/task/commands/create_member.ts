import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string({ required: false })
  declare firstName: string

  @args.string({ required: false })
  declare lastName: string

  @args.string({ required: false })
  declare status: string

  async run() {
    console.log(this.firstName)
    
    if (!this.firstName) {
      this.firstName = await this.prompt.ask('Enter first name:')
    }

    if (!this.lastName) {
      this.lastName = await this.prompt.ask('Enter last name:')
    }

    if (!this.status) {
      this.status = await this.prompt.ask('Enter status (active, inactive, honourable, participative):')
    }

    await db.table('students')
    .insert({
      first_name: this.firstName,
      last_name: this.lastName,
      status: this.status
    })

    console.log(`(${this.firstName} ${this.lastName}, status: ${this.status}) added`);

  }
}