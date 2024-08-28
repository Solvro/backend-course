import Department from '#models/department'
import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member-model'
  static description = 'Creates a member using a data model'

  static options: CommandOptions = {
    startApp: true,
  }

  private STATUSES = ['ACTIVE', 'NON_ACTIVE', 'BREAK_IN', 'HONORARY']

  async run() {
    const firstName = await this.prompt.ask("Enter member's first name: ")
    const lastName = await this.prompt.ask("Enter member's last name: ")
    const status = await this.prompt.choice("Choose member's status: ", this.STATUSES)

    const departments = await Department.all()

    const departmentIds = await this.prompt.multiple(
      'Choose departments: ',
      departments.map((dep) => ({ name: dep.id.toString(), message: dep.name }))
    )

    try {
      const member = await Member.create({
        firstName: firstName,
        lastName: lastName,
        status: status,
      })
      member.related('departments').sync(departmentIds)
    } catch (error) {
      console.error(`Error while inserting new member: ${error}`)
    }
  }
}
