import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ModifyMember extends BaseCommand {
  static commandName = 'update:member'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  private FIELDS = ['id', 'first_name', 'last_name', 'status']
  private STATUSES = ['no change', 'ACTIVE', 'NON_ACTIVE', 'BREAK_IN', 'HONORARY']

  async run() {
    const field = await this.prompt.choice(
      'By which field do you want to filter members?',
      this.FIELDS
    )

    const value = await this.prompt.ask(`Enter ${field}: `)

    const members = await Member.findManyBy(field, value)

    const memberToUpdateId = await this.prompt.choice(
      'Choose a member to update: ',
      members.map((member) => ({
        name: member.id.toString(),
        message: `${member.id}: ${member.firstName} ${member.lastName}, status: ${member.status}`,
      }))
    )
    // console.log(memberToDeleteId)

    const memberToUpdate = await Member.findOrFail(memberToUpdateId)
    const newFirstName = await this.prompt.ask(
      'Enter new first name (for no changes leave empty): '
    )
    const newLastName = await this.prompt.ask('Enter new last name (for no changes leave empty): ')
    const newStatus = await this.prompt.choice('Enter new status: ', this.STATUSES)

    await memberToUpdate
      .merge({
        firstName: newFirstName ? newFirstName : memberToUpdate.firstName,
        lastName: newLastName ? newLastName : memberToUpdate.lastName,
        status: newStatus !== 'no change' ? newStatus : memberToUpdate.status,
      })
      .save()
  }
}
