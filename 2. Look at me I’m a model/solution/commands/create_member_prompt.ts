import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberSql extends BaseCommand {
  static commandName = 'create:member-prompt'
  static description = 'Create member from query builder using prompt'

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
      const [newMember] = await db.table('members').returning('index').insert({
      index: await this.prompt.ask("Enter new member index: ", {
        validate: (value) => (Number.isInteger(Number(value)) && value.length === 6) ? true : "Index must be 6 digit numeric"
      }),
      first_name: await this.prompt.ask("Enter first name: "),
      last_name: await this.prompt.ask("Enter last name")
    })

    const departments = await this.prompt.multiple("Select member departments",
      await db.from('departments').select('id as name', 'name as message') // aliases as to multiprompt documentation
    )

    if (departments) {
      await db.table('member_departments').multiInsert(
        departments.map(departmentId => ({
          member_index: newMember.index,
          department_id: departmentId
        }))
      )
    }

    this.logger.success('New member created!')
  }
}