import { BaseCommand } from '@adonisjs/core/build/standalone'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CreateMember extends BaseCommand {
  public static commandName = 'create:member'
  public static description = 'Create a new member using raw SQL query'

  public async run() {
    const { name, surname, interests, status, department } = this.parsed.flags

    await Database.rawQuery(`
      INSERT INTO members (name, surname, interests, status, department)
      VALUES (?, ?, ?, ?, ?)
    `, [name, surname, interests, status, department])

    this.logger.info('Member created successfully')
  }
}
