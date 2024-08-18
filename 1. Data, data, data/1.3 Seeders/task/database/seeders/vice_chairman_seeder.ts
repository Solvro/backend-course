import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from "@adonisjs/lucid/services/db";

export default class extends BaseSeeder {
  async run() {
    await db.rawQuery(`
      INSERT INTO 'vice-chairmans' (first_name, surname, date_of_birth, term_start_date, term_end_date, email, photo_url, created_at, updated_at) VALUES
      ('Bolesław', 'Chrobry', '1982-03-22', '2023-01-01', '2025-01-01', 'boleslaw.chrobry@example.com', 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Boleslaus_I.jpg'),
      ('Kazimierz', 'Wielki', '1979-09-11', '2022-01-01', '2024-01-01', 'kazimierz.wielki@example.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Portret_Kazimierza_III_Wielkiego.png/800px-Portret_Kazimierza_III_Wielkiego.png'),
      ('Jan', 'Sobieski', '1984-12-14', '2021-01-01', '2023-01-01', 'jan.sobieski@example.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Schultz_John_III_Sobieski.jpg/800px-Schultz_John_III_Sobieski.jpg')
    `)
  }
}