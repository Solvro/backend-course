import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member-builder'
  static description = 'Create a new member by insert querry builder'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({ description: 'Index of the member', required: true })
  declare index: string

  @args.string({ description: 'First name of the member', required: true })
  declare firstName: string

  @args.string({ description: 'Last name of the member', required: true })
  declare lastName: string

  @args.spread({ description: 'Department IDs of the member', required: false })
  declare departmentsIds: string[]

  async run() {
    await db.table('members').insert({
      index: this.index,
      first_name: this.firstName,
      last_name: this.lastName,
    })

    if (this.departmentsIds && this.departmentsIds.length > 0) {
      const values = this.departmentsIds.map(departmentId => ({
        member_index: this.index,
        department_id: departmentId,
      }))
      
      await db.table('member_departments').insert(values)
    }

    this.logger.info(`Member ${this.firstName} created successfully.`)
  }
}
