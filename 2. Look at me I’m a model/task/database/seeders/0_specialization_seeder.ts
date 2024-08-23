import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      'INSERT INTO specializations (name) VALUES ' +
        "('backend'), ('devops'), ('frontend'), " +
        "('ui'), ('ml'), ('mobile');"
    )
  }
}
