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

  @args.string({ default: '1' })
  declare department_id: string;

  @args.string({ default: 'potezny kurs Programistyczny' })
  declare name: string

  @args.string({ default: 'http://solvro.pl/blog/' })
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