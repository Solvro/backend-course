import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberBuilder extends BaseCommand {
  static commandName = 'create:member-builder'
  static description = 'create member from query builder'

  static options: CommandOptions = {
    startApp: true
  }

  @args.string({
    argumentName: 'index',
    description: 'Unique index of a member',
    required: true
  })
  declare index: string

  @args.string({
    argumentName: 'first_name',
    description: 'First name of new member',
    required: true
  })
  declare firstName: string

  @args.string({
    argumentName: 'last_name',
    description: 'Last name of new member',
    required: true
  })
  declare lastName: string

  @args.string({
    argumentName: 'status',
    description: 'Status of new member',
    required: true
  })
  declare status: string

  @args.spread({
    argumentName: 'departmentsIds',
    description: 'Departments to which new member belongs',
    required: false
  })
  declare departmentsIds: string[]


  async run() {
    if(!Number.isInteger(Number(this.index))) {
      this.logger.error('Index must be a integer number')
      return
    } 

    const statusPossibleValues = ['Active', 'Inactive', 'Trainee', 'Honorary'] as const
    if(!statusPossibleValues.includes(this.status as any)) {
      this.logger.error(`Status "${this.status}" is incorrect. Available values: ${statusPossibleValues.join(', ')}`)
      return
    }

    const availableDepartments = await (await db.from('departments').select('id')).map((row: {id: number}) => row.id)
    if(this.departmentsIds) {
      for(const departmentId of this.departmentsIds) {
        if(!availableDepartments.includes(Number(departmentId))) {
          this.logger.error(`Department with index ${departmentId} does not exist`)
          return
        }
      }
    }

    await db.table('club_members').insert({
      index: Number(this.index),
      first_name: this.firstName,
      last_name: this.lastName,
      status: this.status
    })

    if(this.departmentsIds) {
      await db.table('department_members').multiInsert(
        this.departmentsIds.map((departmentId) => ({
          department_id: departmentId,
          member_id: this.index
        }))
      )
    }

    this.logger.success('Succesfully created new member!')
  }
}