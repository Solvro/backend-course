import {BaseCommand} from '@adonisjs/core/ace'
import type {CommandOptions} from '@adonisjs/core/types/ace'
import Department from '#models/department'
import Course from '#models/course'

export default class TestRelationsCommand extends BaseCommand {
  static commandName = 'test:relations'
  static description = 'Test relationships between Department, Course, and Member models.'

  static options: CommandOptions = {startApp: true}

  async run() {
    //test department-course
    const backendDepartment = await Department.query().where('name', 'Backend').preload('courses').first()

    if (backendDepartment) {
      console.log(`Courses in the ${backendDepartment.name} Department:`)
      backendDepartment.courses.forEach((course) => {
        console.log(`- ${course.name}`)
      })
    } else {
      console.log('Backend Department not found.')
    }

    //test department-member
    if (backendDepartment) {
      const backendMembers = await backendDepartment.related('members').query()
      console.log(`Members in the ${backendDepartment.name} Department:`)
      backendMembers.forEach((member) => {
        console.log(`- ${member.firstName} ${member.lastName}`)
      })
    } else {
      console.log('Backend Department not found.')
    }

    //test member-course
    const courseName = 'Od zera do backend developera'
    const course = await Course.query().where('name', courseName).preload('members').first()

    if (course) {
      console.log(`Members taking the course "${course.name}":`)
      course.members.forEach((member) => {
        console.log(`- ${member.firstName} ${member.lastName}`)
      })
    } else {
      console.log(`Course "${courseName}" not found.`)
    }
  }
}
