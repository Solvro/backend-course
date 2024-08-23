import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateStudentBuilder extends BaseCommand {
  static commandName = 'create:student-builder'
  static description = 'Create a new student using insert query builder'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({
    description: "New student's index",
  })
  declare index: string

  @args.string({
    description: "New student's first name",
  })
  declare firstName: string

  @args.string({
    description: "New student's last name",
  })
  declare lastName: string

  @args.spread({
    description: "New student's specializations",
    required: false,
  })
  declare specializations: string[]

  async run() {
    await db.table('students').insert({
      index: this.index,
      first_name: this.firstName,
      last_name: this.lastName,
    })

    if (this.specializations) {
      await db.table('student_specializations').multiInsert(
        this.specializations.map((spec) => ({
          student_index: this.index,
          specialization: spec.toLowerCase(),
        }))
      )
    }

    this.logger.success('Student created successfully!')
  }
}
