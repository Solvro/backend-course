import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await db.rawQuery("INSERT INTO departments (name) VALUES ('Backend'), ('Devops'), ('Frontend'), ('UI'), ('ML'), ('Mobile')")
  }
}