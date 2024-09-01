import { BaseCommand } from '@adonisjs/core/build/standalone'
import Member from 'App/Models/Member'

export default class CreateMemberQueryBuilder extends BaseCommand {
  public static commandName = 'create:member-query'
  public static description = 'Create a new member using query builder'

  public async run() {
    const { name, surname, interests, status, department } = this.parsed.flags

    await Member.create({
      name,
      surname,
      interests,
      status,
      department
    })

    this.logger.info('Member created successfully using query builder')
  }
}