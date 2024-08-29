import { ClubMemberFactory } from '#database/factories/club_member_factory'
import ClubMember from '#models/club_member'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ClubMember.createMany(await ClubMemberFactory.createMany(30))
  }
}