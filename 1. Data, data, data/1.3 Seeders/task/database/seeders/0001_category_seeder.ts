import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const categories = ['Backend', 'Devops', 'Frontend', 'UI', 'ML', 'Mobile']
    await db
      .table('categories')
      .multiInsert(categories.map((name, i) => ({ name, id: i + 1 })))
      .exec()
    await db
      .table('interests')
      .multiInsert(categories.map((name, i) => ({ name, id: i + 1 })))
      .exec()
  }
}
