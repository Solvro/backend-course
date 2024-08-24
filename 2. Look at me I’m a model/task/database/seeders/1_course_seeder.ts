import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name, department_id, description) values ('Od zera do backend developera', (SELECT id FROM departments WHERE name='Backend'), 'Kurs skupia się na frameworku adonis.js w języku node js ucząc konceptów backendu i nie tylko')") 
  }
}