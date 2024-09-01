import { BaseCommand } from '@adonisjs/core/build/standalone'
import Member from 'App/Models/Member'

export default class TestCRUD extends BaseCommand {
  public static commandName = 'test:crud'
  public static description = 'Test CRUD operations on Member model'

  public async run() {
    // Create
    const member = await Member.create({
      name: 'Żel',
      surname: 'Żelowski',
      interests: 'mainowanie Zaca',
      status: 'Active',
      department: 'Media'
    })

    this.logger.info(`Member created: ${member.name} ${member.surname}`)

    // Read
    const foundMember = await Member.find(member.index)
    this.logger.info(`Member found: ${foundMember?.name} ${foundMember?.surname}`)

    // Update
    if (foundMember) {
      foundMember.name = 'Zac'
      await foundMember.save()
      this.logger.info(`Member updated to: ${foundMember.name}`)
    }

    // Delete
    await foundMember?.delete()
    this.logger.info('Member deleted successfully')
  }
}