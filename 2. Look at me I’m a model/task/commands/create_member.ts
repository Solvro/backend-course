import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import SolvroMember from '../app/models/solvro_member.js'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Create a Solvro member giving necessary args'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({
    required: false,
  })
  declare index: string

  @args.string({
    required: false,
  })
  declare firstName: string

  @args.string({
    required: false,
  })
  declare lastName: string

  static allowedStatus = ['trainee', 'active', 'inactive', 'honorary']
  @args.string({
    required: false,
    description: `Allowed member status: [${CreateMember.allowedStatus}]`,
  })
  declare status: string

  async run() {
    let member_status: string | null = this.status

    if (!this.index) {
      this.index = await this.prompt.ask('Enter member index:', {
        validate(value) {
          return Number(value) ? true : 'Index must be a number!'
        },
      })
    }
    if (!this.firstName) {
      this.firstName = await this.prompt.ask('Enter member first name:')
    }
    if (!this.lastName) {
      this.lastName = await this.prompt.ask('Enter member last name:')
    }
    if (!this.status) {
      member_status = await this.prompt.choice(
        'Choose status of member',
        CreateMember.allowedStatus.concat('None'),
        {
          result(value) {
            return value === 'None' ? null : value
          },
        }
      )
    }
    await SolvroMember.create({
      index: Number(this.index),
      firstName: this.firstName,
      lastName: this.lastName,
      status: member_status
        ? member_status.charAt(0).toUpperCase() + member_status.slice(1).toLowerCase()
        : null,
    })
  }

  async completed() {
    if (this.error) {
      this.logger.error(this.error.message)
      return true
    } else {
      console.log(`Solvro member was succesfully created.`)
    }
  }
}
