import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {

    await db.rawQuery(`
      INSERT INTO categories (name, chairman_id, vice_chairman_id, project_id) VALUES
      ('Backend', 1, 2, 1),
      ('Devops',  2, 3, 1),
      ('Frontend', 3, 1, 1),
      ('UI',1, 2, 1),
      ('ML',2, 3, 1),
      ('Mobile',3, 1, 1)
    `)
  }
}