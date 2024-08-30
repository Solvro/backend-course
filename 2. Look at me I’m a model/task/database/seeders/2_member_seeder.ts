import {BaseSeeder} from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(`
      INSERT INTO members(index, first_name, last_name, status, interests) values 
      (272709, 'Jakub', 'Czajkowski', 'active', 'Backend Development, Node.js')
    `)

    const backendDepartmentId = await db.query()
      .from('departments')
      .where('name', 'Backend')
      .select('id')
      .first()

    if (backendDepartmentId) {
      await db.rawQuery(`
        INSERT INTO department_members(department_id, member_index) VALUES 
        (${backendDepartmentId.id}, 272709)
      `)
    }

    const courseId = await db.query()
      .from('courses')
      .where('name', 'Od zera do backend developera')
      .select('id')
      .first()

    if (courseId) {
      await db.rawQuery(`
      INSERT INTO member_courses(course_id, member_index, start_date) VALUES
      (${courseId.id}, 272709, now())
      `)
    }
  }
}