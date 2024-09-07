import Student from '#models/student'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class GenerateToken extends BaseCommand {
  static commandName = 'generate:token'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string()
  declare index: string

  async run() {
    const student = await Student.findOrFail(this.index)
    const token = await Student.accessTokens.create(student, ['student:update'], {
      expiresIn: '30 days',
    })

    this.ui
      .sticker()
      .add('Generated access token')
      .add('')
      .add(
        `Student:   ${this.colors.cyan(student.firstName)} ${this.colors.cyan(student.lastName)}`
      )
      .add(`Index:   ${this.colors.cyan(student.index.toString())}`)
      .add(`Token: ${this.colors.green(token.value!.release())}`)
      .render()
  }
}
