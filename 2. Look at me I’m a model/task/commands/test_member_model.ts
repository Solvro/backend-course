import {BaseCommand} from '@adonisjs/core/ace'
import type {CommandOptions} from '@adonisjs/core/types/ace'
import Member from '#models/member'

export default class TestMemberModel extends BaseCommand {
  static commandName = 'test:member-model'
  static description = 'Test member model.'

  static options: CommandOptions = {startApp: true}

  private createdMemberId: number | null = null

  private async createMember() {
    const member = await Member.create({
      index: 1,
      firstName: 'John',
      lastName: 'Doe',
      status: 'onboarding',
      interests: 'JavaScript, Python',
    })

    this.createdMemberId = member.index
    console.log('Member created: ', member)
  }

  private async getMember(memberId: number) {
    const member = await Member.find(memberId)

    if (member) {
      console.log('Member found: ', member)
    } else {
      console.log('Member not found: ', member)
    }
  }

  private async updateMember(memberId: number) {
    const member = await Member.find(memberId)

    if (member) {
      member.status = 'active'
      member.interests = 'JavaScript, Python, TypeScript'
      await member.save()

      console.log('Member Updated:', member)
    } else {
      console.log('Member Not Found')
    }
  }

  private async deleteMember(memberId: number) {
    const member = await Member.find(memberId)

    if (member) {
      await member.delete()
      console.log('Member Deleted')
    } else {
      console.log('Member Not Found')
    }
  }

  async run() {
    await this.createMember()

    if (this.createdMemberId !== null) {
      await this.getMember(this.createdMemberId)
      await this.updateMember(this.createdMemberId)
      await this.deleteMember(this.createdMemberId)
    }
  }
}