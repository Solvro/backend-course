import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name, category, description) VALUES ('Backend-course', 'BACKEND', 'This is a backend course')");
  }
}