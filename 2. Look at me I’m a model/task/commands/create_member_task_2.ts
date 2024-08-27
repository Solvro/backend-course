import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberTask2 extends BaseCommand {
  static commandName = 'create:member-task-2'
  static description = 'Create member using prompts'

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    this.logger.info(`Trying to create a new member...`)
    const memberName = await this.prompt.ask('Enter the member name:')
    const memberSurname = await this.prompt.ask('Enter the member surname:')
    const memberStatus = await this.prompt.ask(
      'Enter the member status. Options=[active, inactive, honor, begineer]: '
    )
    await db.table('members').returning('id').insert({
      name: memberName,
      surname: memberSurname,
      status: memberStatus,
    })
    this.logger.info(`Member created.`)
  }
}
