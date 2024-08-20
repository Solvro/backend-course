import Course from '#models/course'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateCourseModel extends BaseCommand {
  static commandName = 'create:course-model'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string()
  declare name: string


  async run() {
    const course = await Course.create({ name: this.name })
    this.logger.success(`Pomyślnie utworzono kurs o id ${course.id}`)
  }
}