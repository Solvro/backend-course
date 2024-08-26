import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ModelsTesting extends BaseCommand {
  static commandName = 'models:testing'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    const member = await Member.query()
      .where('index', 123456)  // Replace `memberIndex` with the actual member index or use a different query method
      .preload('departments')
      .firstOrFail()
    
      const departments = member.departments
      console.log(departments)
  }
}