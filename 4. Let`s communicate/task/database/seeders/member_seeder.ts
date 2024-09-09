import {BaseSeeder} from '@adonisjs/lucid/seeders'
import {MemberFactory} from "#database/factories/member_factory";

export default class extends BaseSeeder {
  async run() {
    await MemberFactory.createMany(100)
  }
}
