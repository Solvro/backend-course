import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Dzial from '#models/dzial'

export default class CreateDzial extends BaseCommand {
  static commandName = 'create:dzial'
  static description = 'testowa do sprawdzenia dzialanosci'

  static options: CommandOptions = {}
  async run() {
    const nazwa = await this.prompt('Nazwa dzialu:')
    await Dzial.create({
      nazwa: nazwa,
    })
    this.logger.info('dzial created')
  }
}
