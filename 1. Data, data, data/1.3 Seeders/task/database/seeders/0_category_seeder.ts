import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery("INSERT INTO categories (name) values ('Backend'), ('Frontend'), ('Devops'), ('UI'), ('ML'), ('Mobile')") 
}