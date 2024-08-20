import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Database from '@ioc:Adonis/Lucid/Database'

export default class extends BaseSeeder {
  async run () {
    await Database.rawQuery(`
      INSERT INTO departments (name) VALUES
      ('Backend'),
      ('Devops'),
      ('Frontend'),
      ('UI'),
      ('ML'),
      ('Mobile')
    `)
  }
}
