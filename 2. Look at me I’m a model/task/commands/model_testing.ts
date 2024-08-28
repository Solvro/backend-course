import Course from '#models/course'
import Field from '#models/field'
import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ModelTesting extends BaseCommand {
  static commandName = 'model:testing'
  static description = 'Testing CRUD operations on models.'

  static options: CommandOptions = { startApp: true }

  async run() {
    // this.logger.info('Starting tests on CRUD operations on models. Task 2.2')
    // this.logger.info('CREATE: trying to create a new test field.')
    // const field = new Field()
    // field.name = 'Test'
    // field.description = 'Krotki opis.'
    // await field.save()
    // this.logger.info(`Field created.`)
    // this.logger.info('READ: trying to read first member.')
    // const members = await Member.findOrFail(1)
    // console.log(members)
    // this.logger.info('UPDATE: trying to update course description.')
    // course.description = 'Update opisu.'
    // await course.save()
    // this.logger.info(`Course updated.`)
    // this.logger.info('DELETE: trying to delete a member.')
    // const member = await Member.findOrFail(6)
    // await member.delete()
    // this.logger.info(`Member deleted.`)
    // this.logger.info('Starting tests on CRUD operations on relations. Task 2.3')
    // const course = await Course.findOrFail(1)
    // const field = await Field.findOrFail(1)
    // const member = await Member.findOrFail(1)

    // this.logger.info('Adding a course to a member.')
    // await member.related('courses').attach([course.id])
    // this.logger.info(`Course with id: ${course.id} added to member with id: ${member.id}.`)

    // this.logger.info('Fetching courses for the member.')
    // const memberCourses = await member.related('courses').query()
    // console.log(`Courses for member with id ${member.id}:`, memberCourses)

    // this.logger.info('Adding a field to a member.')
    // await member.related('fields').attach([field.id])
    // this.logger.info(`Field with id: ${field.id} added to member with id: ${member.id}.`)

    // this.logger.info('Fetching fields for the member.')
    // const memberFields = await member.related('fields').query()
    // console.log(`Fields for member with id ${member.id}:`, memberFields)

    // this.logger.info('Fetching courses for the field.')
    // const fieldCourses = await field.related('courses').query()
    // console.log(`Courses for field with id ${field.id}:`, fieldCourses)

    this.logger.info('Test of slugify url.')
    const slugifyCourse = new Course()
    slugifyCourse.name = 'Kurs z uzywania api slugify.'
    slugifyCourse.fieldId = 3
    slugifyCourse.description = 'Krotki test uzywania api slugify'
    await slugifyCourse.save()
    this.logger.info('Course created.')
  }
}
