import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { SolvroMemberFactory } from '#database/factories/solvro_member_factory'

export default class extends BaseSeeder {
  async run() {
    await SolvroMemberFactory.createMany(10)
  }
}
