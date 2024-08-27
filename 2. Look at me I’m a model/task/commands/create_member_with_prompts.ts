import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberWithPrompts extends BaseCommand {
  static commandName = 'create:member-with-prompts'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  async run() {
    const name = await this.prompt.ask("Name: ")
    const surname = await this.prompt.ask("Surname: ")
    const index = await this.prompt.ask("Index (6-numbers-long): ")
    const biography = await this.prompt.ask("Bio: ")

    try {
      db.table('solvro_members').insert({
        name: name.toString(),
        surname: surname.toString(),
        index: index.toString(),
        biogrpahy: biography.toString(),
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