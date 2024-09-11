import { MemberFactory } from '#database/factories/member_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    MemberFactory.createMany(10)
  }
}
