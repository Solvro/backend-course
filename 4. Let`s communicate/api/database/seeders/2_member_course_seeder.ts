import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(`
      INSERT INTO "solvro_members" (index, first_name, last_name, status)
      VALUES
      (123456, 'Wojciech', 'Kosmalski', 'Trainee');

      INSERT INTO "courses" (name, section_id, description)
      VALUES
        ('Od zera do programisty 15k', 1, 'najlepszy kurs komputerowy ever');

      INSERT INTO "member_courses" (member_index, course_id, start_date)
      VALUES
        (123456, 1, CURRENT_DATE);
      `)
  }
}