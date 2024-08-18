/* eslint-disable prettier/prettier */
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(`INSERT INTO courses (name, section_id, description) VALUES
      ('Od zera do backend developera', (SELECT id FROM sections WHERE name = 'Backend' LIMIT 1), 'Giga kurs backendu prowadzony przez szefa Dawida Linka');
      `)
  }
}