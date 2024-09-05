import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      "INSERT INTO members (index, first_name, last_name, status) VALUES ('279933', 'Kacper', 'Judasz', 'aktywny')"
    )
    await db.rawQuery(
      "INSERT INTO members (index, first_name, last_name, status) VALUES ('000111', 'abc', 'dba', 'wdrożeniowy')"
    )
  }
}