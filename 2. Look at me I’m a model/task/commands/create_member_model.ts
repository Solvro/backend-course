import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Member from '#models/member'


export default class CreateMemberModel extends BaseCommand {
  static commandName = 'create:member-model'
  static description = ''

  static options: CommandOptions = {    startApp: true}

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
    this.logger.info('Hello world from "CreateMemberModel"')
    const newMember = await Member.create({
      index: Number(this.index),
      firstName: this.firstName,
      lastName: this.lastName
    })
    await newMember.related('departments').attach(this.departments ?? [])
    this.logger.success('created member succesfully')
  }
}