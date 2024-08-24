import Course from '#models/course'
import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class TestModels extends BaseCommand {
  static commandName = 'test:models'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    const course = await Course.create({
      name: 'Adonisjs 101' + Math.random(),
    })

    const member = await Member.create({
      index: 272649 + Math.random(),
      firstName: 'John',
      lastName: 'Doe',
      status: 'active',
    })

    member.related('memberCourses').create({
      courseId: course.id,
    })
  }
}
