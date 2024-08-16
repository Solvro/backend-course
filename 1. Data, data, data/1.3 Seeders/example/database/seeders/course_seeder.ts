import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name) VALUES ('Techniki Eksploratacji Danych'), ('Analiza Matematyczna 1'), ('Bazy Danych')")
  }
}