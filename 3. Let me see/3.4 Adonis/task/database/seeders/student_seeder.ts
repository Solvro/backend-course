import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { StudentFactory } from '#database/factories/student_factory'

export default class extends BaseSeeder {
  async run() {
    await StudentFactory.createMany(30)
  }
}
