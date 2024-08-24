import Member from '#models/member'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMemberModel extends BaseCommand {
  static commandName = 'create:member-model'
  static description = 'Create a member'

  static options: CommandOptions = { startApp: true }
  // index: await this.prompt.ask('Enter the index of the member'),
  //     first_name: await this.prompt.ask('Enter the first name of the member'),
  //     last_name: await this.prompt.ask('Enter the last name of the member'),
  //     status: await this.prompt.choice(
  //       'Select the status of the member',
  //       await db
  //         .rawQuery(`SELECT unnest(enum_range(NULL::member_status))`)
  //         .exec()
  //         .then((res) => res.rows.map((row: { unnest: string }) => row.unnest))
  //     ),
  async run() {
    await Member.create({
      index: await this.prompt.ask('Enter the index of the member'),
      firstName: await this.prompt.ask('Enter the first name of the member'),
      lastName: await this.prompt.ask('Enter the last name of the member'),
      status: await this.prompt.choice(
        'Select the status of the member',
        await db
          .rawQuery(`SELECT unnest(enum_range(NULL::member_status))`)
          .exec()
          .then((res) => res.rows.map((row: { unnest: string }) => row.unnest))
      ),
    })
  }
}
