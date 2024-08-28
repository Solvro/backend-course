import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberRaw extends BaseCommand {
  static commandName = 'create:member-prompt'
  static description = 'Creates a member, prompts user for column values'

  static options: CommandOptions = {
    startApp: true,
  }

  private STATUSES = ['ACTIVE', 'NON_ACTIVE', 'BREAK_IN', 'HONORARY']

  async run() {
    const firstName = await this.prompt.ask("Enter member's first name: ")
    const lastName = await this.prompt.ask("Enter member's last name: ")
    const status = await this.prompt.choice("Choose member's status: ", this.STATUSES)

    try {
      await db.table('members').returning('id').insert({
        first_name: firstName,
        last_name: lastName,
        status: status,
      })
    } catch (error) {
      console.error(`Error while inserting new member: ${error}`)
    }
  }
}
