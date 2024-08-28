import Course from '#models/course'
import Department from '#models/department'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class UpdateCourse extends BaseCommand {
  static commandName = 'update:course'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const courseId = await this.prompt.ask('Enter course id: ')
    const course = await Course.findOrFail(courseId)

    const departments = await Department.all()

    const departmentId = await this.prompt.choice(
      'Choose department: ',
      departments
        .map((dep) => ({ name: dep.id.toString(), message: dep.name }))
        .concat([{ name: 'no change', message: 'no change' }])
    )

    const name = await this.prompt.ask('Enter a new name (leave empty for no change): ')
    const description = await this.prompt.ask('Enter a description: (leave empty for no change): ')

    if (departmentId !== 'no change') {
      console.log('kurwa mac')
      console.log(departmentId)
      const department = await Department.findOrFail(departmentId)
      await course.related('department').associate(department)
    }
    await course
      .merge({
        name: name ? name : course.name,
        description: description ? description : course.description,
      })
      .save()
  }
}
