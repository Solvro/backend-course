import {BaseCommand, args} from '@adonisjs/core/ace'
import type {CommandOptions} from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Create a new member using rawQuery.'

  static options: CommandOptions = {startApp: true}

  @args.string({
    argumentName: 'index',
    description: 'Index of the new member.',
    required: true,
  })
  declare index: string

  @args.string({
    argumentName: 'first-name',
    description: 'First name of the new member.',
    required: true,
  })
  declare firstName: string

  @args.string({
    argumentName: 'last-name',
    description: 'Last name of the new member.',
    required: true,
  })
  declare lastName: string

  @args.string({
    argumentName: 'status',
    description: 'Status of the new member (onboarding, active, honorary, inactive)',
    required: true,
  })
  declare status: string

  @args.string({
    argumentName: 'interests',
    description: 'Interests of new member.',
    required: true,
  })
  declare interests: string

  @args.spread({
    description: 'Departments IDs of the new member.',
    required: false,
  })
  declare departmentsIds: string[]

  async run() {
    await db.rawQuery(
      `INSERT INTO members (index, first_name, last_name, status, interests) 
        VALUES (?, ?, ?, ?, ?)`,
      [this.index, this.firstName, this.lastName, this.status, this.interests]
    )

    if (this.departmentsIds) {
      await db.rawQuery("INSERT INTO department_members (member_index, department_id) VALUES " +
        this.departmentsIds.map(departmentId => `(${this.index},'${departmentId}')`).join(',')
      )
    }
  }
}