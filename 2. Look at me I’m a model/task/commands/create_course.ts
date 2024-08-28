import Course from '#models/course'
import Department from '#models/department'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateCourse extends BaseCommand {
  static commandName = 'create:course'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const departments = await Department.all()

    const departmentId = await this.prompt.choice(
      'Choose department: ',
      departments.map((dep) => ({ name: dep.id.toString(), message: dep.name }))
    )

    const name = await this.prompt.ask('Enter a name: ')
    const description = await this.prompt.ask('Enter a description: ')

    const course = await Course.create({
      name: name,
      description: description,
      departmentId: Number.parseInt(departmentId),
    })

    const department = await Department.findOrFail(departmentId)

    await course.related('department').associate(department)
  }
}
