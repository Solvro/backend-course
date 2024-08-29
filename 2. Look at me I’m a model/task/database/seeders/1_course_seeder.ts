import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Course from '#models/course'

export default class extends BaseSeeder {
  async run() {
    await Course.create({
      name: 'С нуля до бэкэнд разработчика',
      specialization: 'backend',
      description:
        "You'll understand the basic concepts of backend development by learning Node.js and its AdonisJS framework",
    }) // ensure hooks work

    /*await db.rawQuery(
      'INSERT INTO courses (name, specialization, description) VALUES ' +
        "('From scratch to backend developer', 'backend', E'You\\'ll understand the basic concepts of backend development by learning Node.js and its AdonisJS framework')"
    )*/
  }
}
