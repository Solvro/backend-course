import Czlonek from '#models/czlonek'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateCzlonekModel extends BaseCommand {
  static commandName = 'create:czlonek-model'
  static description = ''
  @args.string({
    description: 'Id nowego czlonka',
    required: true,
  })
  declare id: string

  @args.string({
    description: 'Imie czlonka',
    required: true,
  })
  declare imie: string

  @args.string({
    description: 'Nazwisko czlonka',
    required: true,
  })
  declare nazwisko: string

  @args.string({
    description: 'Status czlonka',
    required: true,
  })
  declare status: string
  static options: CommandOptions = {}

  async run() {
    console.log(Number(this.id), this.imie, this.nazwisko, this.status)
    await Czlonek.create({
      id: Number(this.id),
      imie: this.imie,
      nazwisko: this.nazwisko,
      status: this.status,
    })
    this.logger.success('Hello world from "CreateCzlonek"')
  }
}
