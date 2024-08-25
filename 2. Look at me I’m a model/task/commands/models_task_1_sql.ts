import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ModelsTask1Sql extends BaseCommand {
  static commandName = 'models:task-1-sql'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    this.logger.info('Hello world from "ModelsTask1Sql"')
  }
}