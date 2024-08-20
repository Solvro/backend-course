import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Database from '@ioc:Adonis/Lucid/Database'

export default class extends BaseSeeder {
  async run() {
    await Database.rawQuery(`
      INSERT INTO courses (name, description, resources, lead, department, created_date, modified_date)
      VALUES (
        'Od zera do backend developera',
        'Bardzon cool kursik',
        '<Bardzo fajny link>',
        (SELECT id FROM solvro_members WHERE name='Fajnyczłowiek'),
        (SELECT id FROM departments WHERE name='Backend'),
        NOW(),
        NOW()
      )
    `)
  }
}