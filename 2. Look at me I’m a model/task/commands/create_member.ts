import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'create'

  static options: CommandOptions = {
    startApp: true,
  }
  @args.string({ description: 'Index of the member', required: true })
  declare index: string

  @args.string({ description: 'Name of the member', required: true })
  declare firstName: string

  @args.string({ description: 'Last name of the member', required: true })
  declare lastName: string

  @args.spread({ description: 'Role of the member', required: false })
  declare departmentsIds: string[]

  async run() {
    await db.rawQuery('INSERT INTO members (index, first_name, last_name) VALUES (?, ?, ?)', [
      this.index,
      this.firstName,
      this.lastName,
    ])

    if (this.departmentsIds && this.departmentsIds.length > 0) {
      const values = this.departmentsIds.map((departmentId) => [this.index, departmentId])
      const placeholders = values.map(() => '(?, ?)').join(', ')

      const query = `INSERT INTO member_departments (member_index, department_id) VALUES ${placeholders}`

      await db.rawQuery(query, values.flat())
    }

    this.logger.info(`Member ${this.firstName} created successfully.`)
  }
}
