import { StudentFactory } from '#database/factories/student_factory'
import Student from '#models/student'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Student.createMany(await StudentFactory.createMany(50))
  }
}
