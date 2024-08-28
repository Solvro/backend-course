import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class DeleteMember extends BaseCommand {
  static commandName = 'delete:member'
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

    const memberToDeleteId = await this.prompt.choice(
      'Choose a member to delete: ',
      members.map((member) => ({
        name: member.id.toString(),
        message: `${member.id}: ${member.firstName} ${member.lastName}, status: ${member.status}`,
      }))
    )
    // console.log(memberToDeleteId)

    const memberToDelete = await Member.findOrFail(memberToDeleteId)
    memberToDelete?.delete()
  }
}

//
