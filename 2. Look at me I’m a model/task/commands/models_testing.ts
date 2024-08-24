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
    /*await Member.create({
      index: 123456,
      name: 'John',
      surname: 'Doe',
      status: 'NEW'
    }) */
    const member = await Member.find(123456)
    if (member) {
      /*await member.merge({
        name: "Joe"
      }).save()*/
      member.delete()
    }
  }
}