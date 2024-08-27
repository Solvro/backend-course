import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateMemberTask3 extends BaseCommand {
  static commandName = 'create:member-task-3'
  static description = 'Create a new member using model.'

  static options: CommandOptions = { startApp: true }

  async run() {
    this.logger.info('Trying to create a new member')
    const memberName = await this.prompt.ask('Enter the member name:')
    const memberSurname = await this.prompt.ask('Enter the member surname:')
    const memberStatus = await this.prompt.ask(
      'Enter the member status. Options=[active, inactive, honor, begineer]: '
    )
    const validStatuses = ['active', 'inactive', 'honor', 'begineer'] as const

    const member = new Member()
    member.name = memberName
    member.surname = memberSurname
    member.status = memberStatus as (typeof validStatuses)[number]
    await member.save()
    this.logger.info(`Member created.`)
  }
}
