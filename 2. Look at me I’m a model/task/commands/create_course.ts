import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Course from '#models/course'

export default class CreateCourse extends BaseCommand {
  static commandName = 'create:course'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string()
  declare id: string;

  @args.string()
  declare department_id: string;

  @args.string()
  declare name: string

  @args.string({ required: false })
  declare link: string

  @args.string({ required: false })
  declare description: string

  async run() {
    console.log(this.id, this.department_id, this.name, this.link, this.description)
    await Course.create({
      id: this.id,
      department_id: this.department_id,
      name: this.name,
      link: this.link,
      description: this.description
    })
  }
}