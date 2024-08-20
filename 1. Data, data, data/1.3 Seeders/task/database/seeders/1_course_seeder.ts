import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO courses (name, department_id, url_link, description) VALUES ( 'Od zera do backend developera', (SELECT id FROM departments WHERE name = 'Backend'), NULL, 'Kurs dotyczący tworzenia backendu aplikacji w node.js i frameworku adonis.js' )")
  }
} 