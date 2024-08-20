import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      "INSERT INTO courses (name, field_id, description, resource) values ('Od zera do backend developera', (SELECT id FROM fields WHERE name='Backend'), 'Kurs backendowy zorganizowany przez SOLVRO', 'https://www.youtube.com/watch?v=KSPxHniCtmw')"
    )
  }
}
