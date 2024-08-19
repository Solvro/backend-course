import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name, category, link, description) VALUES ('Backend-course', 'BACKEND', 'https://github.com/Solvro/backend-course', 'This is a backend course')");
  }
}