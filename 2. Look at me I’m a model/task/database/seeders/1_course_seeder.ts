import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      'INSERT INTO courses (name, specialization, description) VALUES ' +
        "('From scratch to backend developer', (SELECT name FROM specializations WHERE name = 'backend'), E'You\\'ll understand the basic concepts of backend development by learning Node.js and its AdonisJS framework')"
    )
  }
}
