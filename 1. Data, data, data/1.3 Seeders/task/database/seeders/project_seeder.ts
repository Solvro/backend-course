import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(`
      INSERT INTO projects (name, repository_url, description, status) VALUES
      ('Backend_node_js_course', 'https://github.com/Solvro/backend-course', 'Backend course provided for vacation challenge new recruitment.', 'ACTIVE'),
    `)
  }
}