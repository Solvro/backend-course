import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      "INSERT INTO departments (name) VALUES ('Backend'),('Devops'),('Frontend'),('UI'),('ML'), ('Mobile')"
    )
  }
}
