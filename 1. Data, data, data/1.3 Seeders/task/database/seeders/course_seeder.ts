import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await db.rawQuery(
      "INSERT INTO courses (name, department_id, description, url) values ('Od zera do backend developera', (select department_id from departments where name='Backend'), 'Kurs backendu w nodejs', 'www.urldokursu.pl')"
    )
  }
}
