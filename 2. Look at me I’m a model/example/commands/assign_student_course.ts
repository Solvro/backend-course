import Student from '#models/student'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class AssignStudentCourse extends BaseCommand {
  static commandName = 'assign:student-course'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string()
  declare studentIndex: string

  @args.string()
  declare courseId: string

  async run() {
    const student = await Student.firstOrCreate({ index: Number(this.studentIndex) })
    await student.related('courses').attach([this.courseId])
    await student.load('courses')
    console.log(student.courses)
  }
}