import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberQueryBuilder extends BaseCommand {
  static commandName = 'create:member-query-builder'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string({
    argumentName: 'name',
    description: "Name of the new member.",
    required: true
  })
  declare name: string

  @args.string({
    argumentName: 'surname',
    description: "Surname of the new member.",
    required: true
  })
  declare surname: string

  @args.string({
    argumentName: 'index',
    description: "Index of the new member. Must be unique.",
    required: true
  })
  declare index: string

  @args.string({
    argumentName: 'biography',
    description: "Biography of the new member.",
    required: false
  })
  declare biography: string

  async run() {
    if (!this.index || !this.name || !this.name) {
      this.logger.error('Index, first name, and last name are required fields.')
      return
    }

    try {
      db.table('solvro_members').insert({
        name: this.name,
        surname: this.surname,
        index: this.index,
        biogrpahy: this.biography,
        status: "new",
        created_at: new Date(),
        updated_at: new Date(),
      })
      
      this.logger.success('New member created successfully!')
    } catch (error) {
      this.logger.error(`Failed to create member: ${error.message}`)
    }
  }
}