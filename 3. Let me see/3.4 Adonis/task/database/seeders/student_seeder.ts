import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { StudentFactory } from '#database/factories/student_factory'
import Student from '#models/student'

export default class extends BaseSeeder {
  async run() {
    await Student.createMany(await StudentFactory.createMany(10))
  }
}
