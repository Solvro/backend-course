import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from "@adonisjs/lucid/services/db"

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(`
      INSERT INTO courses(name, department_id, resource_url, description) values 
      ('Od zera do backend developera',
      (SELECT id FROM departments WHERE name='Backend'),
      'https://docs.google.com/document/d/1FR6PSLg_5G0hWC429dXyeJLonLf76L1LbHH8ycVNavA/edit',
      'Ten kurs składa się z dwóch stron. Z jednej strony co tydzień poznajemy fundamentalny element tworzenia aplikacji od strony backendu, gdzie na podstawie przekazanej wiedzy rozwiązujemy i oddajemy do sprawdzenia dany snipet kodu w node js.')
    `)
  }
}