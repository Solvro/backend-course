import { MemberFactory } from '#database/factories/member_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    await MemberFactory.createMany(40)
    console.log("Added data to members!")
  }
}