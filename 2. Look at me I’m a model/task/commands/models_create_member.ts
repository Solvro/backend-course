import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class ModelsCreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Create member from prompt'

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    const [newMember] = await db.table('members').returning('index').insert({
      index: await this.prompt.ask("Enter new member index: ", {
        validate: (value) => (Number.isInteger(Number(value)) && value.length === 6) ? true : "Index must be 6 digit numeric"
      }),
      name: await this.prompt.ask("Enter first name: "),
      surname: await this.prompt.ask("Enter surname: ")
    })

    const departments = await this.prompt.multiple("Select member departments",
      await db.from('departments').select('id as name', 'name as message')
    )

    if (departments) {
      await db.table('member_departments').multiInsert(
        departments.map(departmentId => ({
          member_index: newMember.index,
          department_id: departmentId
        }))
      )
    }
  }
}