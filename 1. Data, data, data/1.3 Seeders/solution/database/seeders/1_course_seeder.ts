import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name, department_id, description, url) values ('Od zera do backend developera', (SELECT id FROM departments WHERE name='Backend'), 'Kurs skupia się na frameworku adonis.js w języku node js ucząc konceptów backendu i nie tylko', 'https://docs.google.com/document/d/1FR6PSLg_5G0hWC429dXyeJLonLf76L1LbHH8ycVNavA/edit')") 
  }
}