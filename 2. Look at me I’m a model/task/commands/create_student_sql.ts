import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateStudent extends BaseCommand {
  static commandName = 'create:student-sql'
  static description = 'Create a new student using rawQuery'
  static aliases = ['make:student-sql']

  static options: CommandOptions = {
    startApp: true,
    allowUnknownFlags: false,
    staysAlive: false,
  }

  @args.string({
    description: "New student's index",
  })
  declare index: string

  @args.string({
    argumentName: 'first-name', // dashed case representation of class property name by default
    description: "New student's first name",
    required: true, // all arguments are required by default
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
    await db.rawQuery(
      'INSERT INTO students (index, first_name, last_name) VALUES (:index, :firstName, :lastName)',
      {
        index: this.index,
        firstName: this.firstName,
        lastName: this.lastName,
      }
    )

    if (this.specializations) {
      for (const specialization of this.specializations) {
        await db.rawQuery(
          'INSERT INTO student_specializations (student_index, specialization) VALUES (:index, :spec)',
          {
            index: this.index,
            spec: specialization?.charAt(0).toUpperCase() + specialization?.slice(1).toLowerCase(),
          }
        )
      }
    }

    this.logger.success('Student created successfully!')
  }
}
