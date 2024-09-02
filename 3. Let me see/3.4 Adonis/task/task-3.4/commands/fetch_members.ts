import { MemberFactory } from '#database/factories/member_factory'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class FetchMembers extends BaseCommand {
  static commandName = 'fetch:members'
  static description = 'Fetch 10 random people to db'

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    await MemberFactory.createMany(10)
    console.log('10 random people added to db')
  }
}