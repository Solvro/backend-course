import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Student from '#models/student'

export default class CreateStudentModel extends BaseCommand {
  static commandName = 'create:student-model'
  static description = 'Create a new student using student model'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({ description: "New student's index" })
  declare index: string

  @args.string({ description: "New student's first name" })
  declare firstName: string

  @args.string({ description: "New student's last name" })
  declare lastName: string

  @args.spread({ description: "New student's specializations", required: false })
  declare specializations: string[]

  async run() {
    await Student.create({
      index: Number.parseInt(this.index),
      firstName: this.firstName,
      lastName: this.lastName,
    })

    // todo: save this.specializations to 'student_specializations' table
    //  when the corresponding relationship will be added to student model

    this.logger.success('Student created successfully!')
  }
}
