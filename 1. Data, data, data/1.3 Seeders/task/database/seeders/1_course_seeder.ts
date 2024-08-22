import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name, category_id, description, url) values ('Kurs Backendu', (SELECT id FROM categories WHERE name='Backend'), 'Kurs node.js', 'https://github.com/Solvro/backend-course')") 
  }
}