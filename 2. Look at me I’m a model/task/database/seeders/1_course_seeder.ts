import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name, department_id, description) VALUES ('Backend-course', (SELECT id FROM departments WHERE name='Backend'), 'This is a backend course')");
  }
}