import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await db.rawQuery("INSERT INTO courses (name, department_id, link, description) VALUES ('Kurs Backendowca', 1, 'https://solvro.com/backend', 'kiedys trzeba')")
  }
}
