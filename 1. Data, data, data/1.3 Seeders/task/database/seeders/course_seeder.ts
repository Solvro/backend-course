import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      "INSERT INTO courses VALUES (1, 'Od zera do Backend developera', 'BACKEND', null, 'lorem ipsum')"
    )
  }
}
