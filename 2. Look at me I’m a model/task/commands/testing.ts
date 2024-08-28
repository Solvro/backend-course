import Course from '#models/course'
import Department from '#models/department'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'


export default class Testing extends BaseCommand {
  static commandName = 'testing'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    this.logger.info('Hello world from "Testing"')

    const course = await Course.firstOrFail();
    await course.load('department')
    console.log(course.department.name)

    const department = await Department.findByOrFail('name', 'Backend')
    await department.load('courses')
    console.log(department.courses.length)

    const newCourse = await Course.create({name: "test course"})
    console.log(newCourse.url)
    newCourse.name = "test course update"
    await newCourse.save()
    console.log(newCourse.url)

    const testCourse = await Course.findBy('name', 'test course')
    await testCourse?.merge({
      name: 'test course 2'
    }).save()

    //await testCourse?.delete()
    
  }
}