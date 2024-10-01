import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Department from '#models/department'

export default class CreateDepartment extends BaseCommand {
  static commandName = 'create:department'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string()
  declare id: string

  @args.string()
  declare name: string
  
  async run() {
    await Department.create({
      id: this.id,
      name: this.name
    })
  }
}