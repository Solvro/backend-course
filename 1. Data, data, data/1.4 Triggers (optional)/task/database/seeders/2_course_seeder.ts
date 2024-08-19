import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    //find backen department
    const department = await db.from('departments').where('name', 'Backend').first()
    const courseName: string = 'Od zera do backend developera'
    const description: string = 'Oto kurs backendowy w ktorym własnie bierzesz udział'

    if (department) {
      await db.rawQuery(`
        INSERT INTO courses (name, departments_id, resource_link, description, created_at, updated_at) VALUES
        (${courseName}, ${department.id}, NULL, ${description}, NOW(), NOW())
      `)
    }
  }
}
