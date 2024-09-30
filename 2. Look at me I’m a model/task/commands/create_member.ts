import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Student from '#models/student'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = ''

  static options: CommandOptions = {
    startApp: true
  }

  @args.string({ required: false })
  declare index: string;

  @args.string({ required: false })
  declare firstName: string

  @args.string({ required: false })
  declare lastName: string

  @args.string({ required: false })
  declare status: 'inactive' | 'active' | 'honourable' | 'participative'

  async run() {
    if (!this.index) {
      this.index = await this.prompt.ask('Enter index: ');
      return;
    }

    if (!this.firstName) {
      this.firstName = await this.prompt.ask('Enter first name:')
    }

    if (!this.lastName) {
      this.lastName = await this.prompt.ask('Enter last name:')
    }

    if (!this.status) {
      this.status = await this.prompt.ask('Enter status (active, inactive, honourable, participative):')
    }

    await Student
    .create({
      index: this.index,
      first_name: this.firstName,
      last_name: this.lastName,
      status: this.status
    })

    console.log(`(${this.firstName} ${this.lastName}, status: ${this.status}) added`);

  }
}