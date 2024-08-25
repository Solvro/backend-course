import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'Create member from rawQuery'

  static options: CommandOptions = {
    startApp: true
  }
  @args.string({
    description: 'Index of the member',
    required: true

  })
  declare index: string
  @args.string({
    argumentName: 'first-name',
    description: "Name of the new member.",
    required: true
  })
  declare firstName: string

  @args.string({
    argumentName: 'last-name',
    description: "Last name of the member.",
    required: true
  })
  declare lastName: string

  @args.spread({
    description: "Departments of the  member",
    required: false,
  })
  declare departments: string[]

  async run() {
   await db.rawQuery("INSERT INTO members (index, first_name, last_name) VALUES (:index, :firstName, :lastName)", {
    index: this.index,
    firstName: this.firstName,
    lastName: this.lastName
   })

   if (this.departments){
    await db.rawQuery("INSERT INTO member_departments (member_index, departments) values " + 
      this.departments.map(departments => `(${this.index},'${departments}')`).join(',')
    )
   }
   this.logger.success("New member succesfully created")
  }
}