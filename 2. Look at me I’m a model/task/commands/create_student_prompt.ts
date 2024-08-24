import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateStudentPrompt extends BaseCommand {
  static commandName = 'create:student-prompt'
  static description = 'Create a new student using prompts'

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    let index = await this.prompt.ask("Enter student's index:", {
      hint: '123456',
      validate(value) {
        return /^[0-9]{6}$/.test(value) ? true : 'Index must consist of 6 digits'
      },
    })

    let firstName = await this.prompt.ask("Enter student's first name:", {
      validate(value) {
        return /^[a-zA-Z]{2,30}$/.test(value)
          ? true
          : 'First name must contain from 2 to 30 letters'
      },
      result(value) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      },
    })

    let lastName = await this.prompt.ask("Enter student's last name:", {
      validate(value) {
        return /^[a-zA-Z]{2,30}$/.test(value) ? true : 'Last name must contain from 2 to 30 letters'
      },
      result(value) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      },
    })

    let choices = await db.from('specializations').select('name')
    let specializations = await this.prompt.multiple(
      "Select student's specializations:",
      choices.map((choice) => choice.name)
    )

    await db.table('students').insert({
      index: index,
      first_name: firstName,
      last_name: lastName,
    })

    if (specializations.length !== 0) {
      await db.table('student_specializations').multiInsert(
        specializations.map((spec) => ({
          student_index: index,
          specialization: spec,
        }))
      )
    }

    this.logger.success('Student created successfully!')
  }
}
