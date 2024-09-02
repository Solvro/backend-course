import { MemberFactory } from '#database/factories/member_factory'
import Member from '#models/member'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Member.createMany(await MemberFactory.createMany(50))
  }
}
