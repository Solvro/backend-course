import { BaseSeeder } from '@adonisjs/lucid/build/src/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CourseSeeder extends BaseSeeder {
  public async run () {
    await Database.rawQuery(`
      INSERT INTO courses (name, department_id, description, url)
      VALUES (
        'Od zera do backend developera',
        (SELECT id FROM departments WHERE name='Backend'),
        'Nauka backendu na przykładzie NodeJS z frameworkiem AdonisJS',
        'https://docs.google.com/document/d/1FR6PSLg_5G0hWC429dXyeJLonLf76L1LbHH8ycVNavA/edit'
      )
    `)
  }
}
