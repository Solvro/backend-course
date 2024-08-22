import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateCzlonekPrompt extends BaseCommand {
  static commandName = 'create:czlonek-prompt'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    const id = await this.prompt('Enter ID:')
    const imie = await this.prompt('Enter First Name:')
    const nazwisko = await this.prompt('Enter Last Name:')
    const status = await this.prompt('Enter Status:')

    await db.table('czlonkowie').insert({
      id: Number(id),
      imie,
      nazwisko,
      status,
    })
    this.logger.success('Stworzono nowego czlonka')
  }
}
