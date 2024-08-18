import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const backendCategory = await db.query().from('categories').where('name', 'Backend').first()

    await db.table('courses').insert({
      name: 'kurs backendowca',
      description: 'kurs linka',
      category_id: backendCategory.id,
    })
  }
}
