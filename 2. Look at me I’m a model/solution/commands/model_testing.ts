import Course from '#models/course'
import Department from '#models/department'
import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class ModelTesting extends BaseCommand {
  static commandName = 'model:testing'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    // check if we can load course with department name
    const course = await Course.firstOrFail();
    await course.load('department')
    console.log(course.department.name)

    // check if we can count Backend department courses
    const department = await Department.findByOrFail('name', 'Backend')
    await department.load('courses')
    console.log(department.courses.length)

    // nice way to group and count how many members are in each department
    const departmentMembers = await Department.query().withCount('members')
    console.log(departmentMembers.map(department => ({ name: department.name, members: department.$extras.members_count })))

    // check member relations
    const member = await Member.firstOrFail()
    console.log(member.email) // computed property from extra 7*
    console.log(await member.finishedCourses())
    member.related('courses').attach({
      [1]: {
        started_date: DateTime.now()
      }
    }) // note that it creates new entry every time

    await member.load('courses')
    await member.related('courses')
      .pivotQuery()
      .where('id', member.courses[0].$extras.pivot_id)
      .update({ grade: 5 })

    // check courses member counts
    const courses = await Course.query().withCount('members')
    console.log(courses.map(courses => ({ name: courses.name, members: courses.$extras.members_count })))

    // create course and check if slugify worked
    const newCourse = await Course.create({ name: 'Elo żelo course 3' })
    console.log(newCourse.url)
    //check if it also works after update
    newCourse.name = "Elo żelo course 3 - updated"
    await newCourse.save()
    console.log(newCourse.url)

    // use custom hook
    const searchCourses = await Course.search('elo')
    console.log(searchCourses)
  }
}