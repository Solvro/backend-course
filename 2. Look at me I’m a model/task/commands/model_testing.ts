import Course from '#models/course'
import Department from '#models/department'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ModelTesting extends BaseCommand {
  static commandName = 'model:testing'
  static description = 'test models'

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    const course = await Course.create({
      name: 'Databases and js',
      departmentId: 1,
    })

    console.log(course.urlLink)

    course.description = 'Course about communication with databases using adonis.js and lucid'
    course.name = 'Databases and JavaScript'

    await course.save()

    console.log(course.urlLink)


    // number of courses
    const backendDepartment = await Department.findByOrFail('name', 'Backend')
    await backendDepartment.load('courses')
    console.log(backendDepartment.courses.length)


    const departmentMembers = await Department.query().withCount('club_members', (query) => {query.as('members')})
    console.log(departmentMembers.map((department) => ({name: department.name, members: department.$extras.members})))
  }
}