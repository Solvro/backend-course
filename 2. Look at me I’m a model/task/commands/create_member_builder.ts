import {args, BaseCommand} from '@adonisjs/core/ace'
import type {CommandOptions} from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'


export default class CreateMemberBuilder extends BaseCommand {
  static commandName = 'create:member-builder'
  static description = 'Create a new member using queryBuilder'

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
    await db.table('members').insert({
      index: this.index,
      first_name: this.firstName,
      last_name: this.lastName,
      status: this.status,
      interests: this.interests,
    })

    if (this.departmentsIds) {
      await db.table('department_members').multiInsert(
        this.departmentsIds.map(departmentId => ({
          member_index: this.index,
          department_id: departmentId
        }))
      )
    }
  }
}