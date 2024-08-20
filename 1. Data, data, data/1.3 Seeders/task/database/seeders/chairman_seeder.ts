import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from "@adonisjs/lucid/services/db";

export default class extends BaseSeeder {

  async run()
  {
    await db.rawQuery(`
      INSERT INTO chairmans (first_name, surname, date_of_birth, term_start_date, term_end_date, email, photo_url ) VALUES
      ('Adam', 'Małysz', '1980-01-01', '2023-01-01', '2025-01-01', 'adam.malysz@example.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Malysz.jpg/1920px-Malysz.jpg'),
      ('Mariusz', 'Pudzianowski', '1978-05-15', '2022-01-01', '2024-01-01', 'mariusz.pudzianowski@example.com', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mariusz_Pudzianowski_5.JPG/800px-Mariusz_Pudzianowski_5.JPG'),
      ('Robert', 'Kubica', '1985-08-30', '2021-01-01', '2023-01-01', 'robert.kubica@example.com', 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Robert_Kubica_at_Monza_2023.jpg')
    `)
  }
}