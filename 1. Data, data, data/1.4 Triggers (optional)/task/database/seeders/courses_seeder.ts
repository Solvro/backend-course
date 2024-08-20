import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      "INSERT INTO courses (name, field_id, description) values ('Test-numer-2', (SELECT id FROM fields WHERE name='Backend'), 'Inny kurs')"
    )
  }
}
