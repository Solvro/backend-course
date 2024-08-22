import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberSql extends BaseCommand {
  static commandName = 'create:member-builder'
  static description = 'Create member from query builder'

  static options: CommandOptions = {
    startApp: true
  }

  @args.string({
    description: "Index of the new member. Must be unique.",
    required: true
  })
  declare index: string

  @args.string({
    argumentName: 'first-name',
    description: "Name of the new member.",
    required: true
  })
  declare firstName: string

  @args.string({
    argumentName: 'last-name',
    description: "Last name of the new member.",
    required: true
  })
  declare lastName: string

  @args.spread({
    description: "Departments of the new member",
    required: false,
  })
  declare departmentsIds: string[]

  async run() {
    // somewere here should be data validation

    await db.table('members').insert({
      index: this.index,
      first_name: this.firstName,
      last_name: this.lastName
    })

    if (this.departmentsIds) {
      await db.table('member_departments').multiInsert(
        this.departmentsIds.map(departmentId => ({
          member_index: this.index,
          department_id: departmentId
        }))
      )
    }

    this.logger.success('New member created!')
  }
}