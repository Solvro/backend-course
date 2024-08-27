import SolvroMember from '#models/solvro_member'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export default class CreateMemberQueryBuilder extends BaseCommand {
  static commandName = 'create:member-model'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string({
    description: "First name of the new member",
    required: true
  })
  declare name: string

  @args.string({
    description: "Last name of the new member",
    required: true
  })
  declare surname: string

  @args.string({
    description: "Unique index of the new member",
    required: true
  })
  declare index: string

  @args.string({
    description: "Status of the new member (active, inactive, new, honorary)",
    required: true
  })
  declare status: 'active' | 'inactive' | 'new' | 'honorary'

  @args.string({
    description: "Biography of the new member",
    required: false
  })
  declare biography: string

  async run() {
    if (!this.index || !this.name || !this.name) {
      this.logger.error('Index, first name, and last name are required fields.')
      return
    }

    const member = await SolvroMember.create({
      name: this.name,
      surname: this.surname,
      index: this.index,
      biography: this.biography || null,
      status: this.status,
      created_at: DateTime.now(),
      updated_at: DateTime.now()
    })

    try {
      db.table('solvro_members').insert({member})
      
      this.logger.success('New member created successfully!')
    } catch (error) {
      this.logger.error(`Failed to create member: ${error.message}`)
    }
  }
}