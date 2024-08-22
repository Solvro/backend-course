import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(
      "INSERT INTO courses (nazwa_kursu, id_dzialu, zasoby, opis) values ('Backend Course: Od zera do backend developera', (SELECT id FROM departments WHERE name='Backend'), 'nauka programowania przy użyciu adonis.js', '')"
    )
  }
}
