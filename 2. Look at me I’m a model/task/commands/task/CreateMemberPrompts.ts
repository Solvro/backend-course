import { BaseCommand, args } from '@adonisjs/core/build/standalone'
import Member from 'App/Models/Member'

export default class CreateMemberPrompt extends BaseCommand {
  public static commandName = 'create:member-prompt'
  public static description = 'Create a new member using prompts for missing data'

  @args.string({ description: 'Name of the member', required: false })
  public name: string

  @args.string({ description: 'Surname of the member', required: false })
  public surname: string

  public async run() {
    const name = this.name || await this.prompt.ask('Enter name')
    const surname = this.surname || await this.prompt.ask('Enter surname')
    const interests = await this.prompt.ask('Enter interests', { default: 'None' })
    const status = await this.prompt.ask('Enter status', { default: 'Active' })
    const department = await this.prompt.ask('Enter department', { default: 'Unknown' })

    await Member.create({ name, surname, interests, status, department })

    this.logger.info('Member created successfully with prompts')
  }
}