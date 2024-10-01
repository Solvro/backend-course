import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateStudentCourse extends BaseCommand {
  static commandName = 'create:student-course'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string()
  declare id: string;

  @args.string()
  declare student_id: string;

  @args.string()
  declare course_id: string;
  
  @args.string()
  declare grade: string;

  async run() {
    await db.table('student_courses').insert({
      id: this.id,
      student_id: this.student_id,
      course_id: this.course_id,
      grade: this.grade,
    })
  }
}
