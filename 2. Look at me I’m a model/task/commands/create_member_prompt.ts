import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberPrompt extends BaseCommand {
  static commandName = 'create:member-prompt'
  static description = 'Create member by query builder using prompt'

  static options: CommandOptions = {}
  @args.string({ description: 'Index of the member', required: false })
  declare index?: string

  @args.string({ description: 'First name of the member', required: false })
  declare firstName?: string

  @args.string({ description: 'Last name of the member', required: false })
  declare lastName?: string

  async run() {
    
    if (!this.index) {
      this.index = await this.prompt.ask('Enter the index of the member:', {
        validate: (value) => {
          const isValid = /^\d{6}$/.test(value)
          return isValid || 'Index must be a 6-digit number.'
        },
      })
    }

    if (!this.firstName) {
      this.firstName = await this.prompt.ask('Enter the first name of the member:', {
        validate: (value) => value.length > 0 || 'First name is required.',
      })
    }

    if (!this.lastName) {
      this.lastName = await this.prompt.ask('Enter the last name of the member:', {
        validate: (value) => value.length > 0 || 'Last name is required.',
      })
    }

    const departments = await this.prompt.multiple("Select member departments",
      await db.from('departments').select('id as name', 'name as message') 
    )

    await db.table('members').insert({
      index: this.index,
      first_name: this.firstName,
      last_name: this.lastName,
    })

    if (departments) {
      await db.table('member_departments').multiInsert(
        departments.map(departmentId => ({
          member_index: this.index,
          department_id: departmentId
        }))
      )
    }

    this.logger.info(`Member ${this.firstName} created successfully.`)
  }
}
