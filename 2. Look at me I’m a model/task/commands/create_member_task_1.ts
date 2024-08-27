import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberTask1 extends BaseCommand {
  static commandName = 'create:member-task-1'
  static description = 'Creates a new member based on args'

  @args.string({
    argumentName: 'member-name',
    description: 'Name of the member',
    required: true,
  })
  declare name: string

  @args.string({
    argumentName: 'member-surname',
    description: 'Surname of the member',
    required: true,
  })
  declare surname: string

  @args.string({
    argumentName: 'member-status',
    description: 'Status of the member',
    required: false,
    default: 'active',
  })
  declare status: string

  // @args.spread({
  //   argumentName: 'member-fields',
  //   description: 'Fields of the member',
  //   required: false,
  // })
  // declare fields_ids: string[]

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    this.logger.info('Trying to insert a new member into the database.')

    await db.table('members').returning('id').insert({
      name: this.name,
      surname: this.surname,
      status: this.status,
    })

    // const memberId = member[0].id

    // if (this.fields_ids) {
    //   await db.table('members_fields').insert(
    //     this.fields_ids.map((fieldId) => ({
    //       member_id: memberId,
    //       field_id: fieldId,
    //     }))
    //   )
    // }

    this.logger.info(`Member created.`)
  }
}
