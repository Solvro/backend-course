import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ReadMember extends BaseCommand {
  static commandName = 'read:member'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  private FIELDS = ['id', 'first_name', 'last_name', 'status']

  async run() {
    const field = await this.prompt.choice(
      'By which field do you want to filter members?',
      this.FIELDS
    )

    const value = await this.prompt.ask(`Enter ${field}: `)

    const members = await Member.findManyBy(field, value)
    members.forEach((member) =>
      console.log(`${member.id}: ${member.firstName} ${member.lastName}, status: ${member.status}`)
    )
  }
}
