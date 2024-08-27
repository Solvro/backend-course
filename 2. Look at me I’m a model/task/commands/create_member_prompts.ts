import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberPrompts extends BaseCommand {
  static commandName = 'create:member-prompts'
  static description = 'create member from query builder using prompts'

  static options: CommandOptions = {
    startApp: true
  }

  // przez MySQL nie jestem w stanie skorzystac z returning()
  async run() {
    const indexInput = await this.prompt.ask('Enter index (must be unique integer value): ', {
      validate(value) {
        return Number.isInteger(Number(value)) ? true : "Incorrect index value"
      }
    })

    await db.table('club_members').returning('index').insert({
      index: Number(indexInput),
      first_name: await this.prompt.ask('Enter first name: '),
      last_name: await this.prompt.ask('Enter last name: '),
      status: await this.prompt.choice('Select status: ', ['Active', 'Inactive', 'Trainee', 'Honorary'])
    })

    const newMember = await db.from('club_members').where('index', Number(indexInput)).select('index').first()
     
    const departmentsIds = await this.prompt.multiple('Select departments: ', 
      await db.from('departments').select('id AS name', 'name AS message')
    )

    if(departmentsIds) {
      await db.table('department_members').multiInsert(
        departmentsIds.map((departmentId) => ({
          department_id: departmentId,
          member_id: newMember.index
        }))
      )
    }

    this.logger.success('Succesfully created new member!')
  }
}