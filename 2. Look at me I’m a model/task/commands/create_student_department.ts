import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateStudentDepartment extends BaseCommand {
  static commandName = 'create:student-department'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string()
  declare id: string;

  @args.string()
  declare student_id: string;

  @args.string()
  declare department_id: string;

  async run() {
    await db.table('student_departments').insert({
      id: this.id,
      student_id: this.student_id,
      department_id: this.department_id
    })
  }
}