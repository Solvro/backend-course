import Member from '#models/member'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Creates a new member of the organization'

  static options: CommandOptions = {
    startApp: true,
  }

  // @args.string()
  // declare firstName: string

  // @args.string()
  // declare lastName: string

  // @args.string()
  // declare status: string

  async run() {
    const firstName = await this.prompt.ask("Enter member's first name: ")
    const lastName = await this.prompt.ask("Enter member's last name: ")
    const status = await this.prompt.ask(
      "Enter member's status (choose from ACTIVE, NON_ACTIVE, BREAK_IN, HONORARY): "
    )

    if (!['BREAK_IN', 'ACTIVE', 'NON_ACTIVE', 'HONORARY'].includes(status)) {
      throw new Error('Invalid status')
    }

    // console.log(`${this.firstName}, ${this.lastName}, ${this.status}`)

    // console.log(db)
    // await db.rawQuery('INSERT INTO members (first_name, last_name, status) VALUES (?, ?, ?);', [
    //   this.firstName,
    //   this.lastName,
    //   this.status,
    // ])

    // await db.table('members').returning('member_id').insert({
    //   first_name: firstName,
    //   last_name: lastName,
    //   status: status,
    // })

    await Member.create({ firstName: firstName, lastName: lastName, status: status })
  }
}
