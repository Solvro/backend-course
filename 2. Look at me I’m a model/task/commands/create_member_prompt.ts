import {BaseCommand} from '@adonisjs/core/ace'
import type {CommandOptions} from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberPrompt extends BaseCommand {
  static commandName = 'create:member-prompt'
  static description = 'Create a new member using prompts.'

  static options: CommandOptions = {startApp: true}

  async run() {
    const index = await this.prompt.ask('Index of the new member:')
    const firstName = await this.prompt.ask('First name of the new member:')
    const lastName = await this.prompt.ask('Last name of the new member:')
    const status = await this.prompt.ask('Status of the new member (onboarding, active, honorary, inactive):')
    const interests = await this.prompt.ask('Interests of new member:')

    const departmentsIdsString = await this.prompt.ask('Departments IDs of the new member (comma-separated, leave empty if none):')
    const departmentsIds = departmentsIdsString ? departmentsIdsString.split(',').map(id => id.trim()) : []

    await db.table('members').insert({
      index: index,
      first_name: firstName,
      last_name: lastName,
      status: status,
      interests: interests,
    })

    if (departmentsIds) {
      await db.table('department_members').multiInsert(
        departmentsIds.map(departmentId => ({
          member_index: index,
          department_id: departmentId
        }))
      )
    }
  }
}