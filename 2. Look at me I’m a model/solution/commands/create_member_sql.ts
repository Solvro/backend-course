import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberSql extends BaseCommand {
  static commandName = 'create:member-sql'
  static description = 'Create member from rawQuery'

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

    await db.rawQuery("INSERT INTO members (index, first_name, last_name) VALUES (:index, :firstName, :lastName)", {
      index: this.index,
      firstName: this.firstName,
      lastName: this.lastName
    })

    if (this.departmentsIds) {
      await db.rawQuery("INSERT INTO member_departments (member_index, department_id) values " +
        this.departmentsIds.map(departmentId => `(${this.index},'${departmentId}')`).join(',')
      )
    }

    this.logger.success('New member created!')
  }
}