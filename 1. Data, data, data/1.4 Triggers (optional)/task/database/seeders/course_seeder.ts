import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      "INSERT INTO courses (name, department_id, description) VALUES ('backend-course', 1, 'Backend-course-desc')"
    )
  }
}
