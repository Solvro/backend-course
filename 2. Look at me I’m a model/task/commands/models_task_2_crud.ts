import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Course from '../app/models/course.js'

export default class ModelsTask2Crud extends BaseCommand {
  static commandName = 'create:course'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const name: string = await this.prompt.ask('Enter course name')
    const departmentId: number = await this.prompt.ask('Enter department id')
    const description: string | null = await this.prompt.ask('Enter course description')

    await Course.create({ name, departmentId, description })
    this.logger.info('Course created')
  }
}
