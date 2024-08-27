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
    this.logger.info('Starting tests on CRUD operations on models. Task 2.2')
    this.logger.info('CREATE: trying to create a new test field.')
    const field = new Field()
    field.name = 'Test'
    field.description = 'Krotki opis.'
    await field.save()
    this.logger.info(`Field created.`)
    this.logger.info('READ: trying to read all members.')
    const members = await Member.all()
    console.log(members)
    this.logger.info('UPDATE: trying to update course description.')
    const course = await Course.findOrFail(1)
    course.description = 'Update opisu.'
    await course.save()
    this.logger.info(`Course updated.`)
    this.logger.info('DELETE: trying to delete a member.')
    const member = await Member.findOrFail(6)
    await member.delete()
    this.logger.info(`Member deleted.`)
    this.logger.info('Starting tests on CRUD operations on relations. Task 2.3')
  }
}
