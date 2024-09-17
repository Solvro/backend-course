import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Member from '#models/member'
import Department from '#models/department'
import MemberDepartment from '#models/member_department'
import db from '@adonisjs/lucid/services/db'

export default class CreateMember extends BaseCommand {
  static commandName = 'create:member'
  static description = 'This command create members using prompts and models'

  static options: CommandOptions = { startApp: true }

  async run() {
    const index =  await this.prompt.ask('Enter the index of the member', {
      validate: (value) => {
        const isValid = /^\d{6}$/.test(value)
        return isValid || 'Index must be a 6-digit number.'
      },
    })

    const firstName = await this.prompt.ask('Enter the first name of the member', {
      validate: (value) => value.length > 0 || 'First name is required.',
    })

    
    const lastName = await this.prompt.ask('Enter the last name of the member', {
      validate: (value) => value.length > 0 || 'Last name is required.',
    })

    const status = await this.prompt.choice('Select the status of the member', [
      'implementation',
      'active',
      'alumni',
      'inactive',
    ])

    // Step 4: Prompt for the department (allowing the user to select from available departments)
    const departments = await Department.all()
    const departmentChoices = departments.map((dept) => ({
      name: dept.id.toString(),
      message: dept.name,
    }))

    const departmentId = await this.prompt.choice('Select the department for the member', departmentChoices)

    // Step 5: Create a new member
    const member = await Member.create({
      index: Number(index),
      firstName,
      lastName,
      status: status as 'implementation' | 'active' | 'alumni' | 'inactive', // Ensure type safety
    })

    // Step 6: Assign the member to the department
    await MemberDepartment.create({
      member_index: member.index,
      department_id: parseInt(departmentId),
    })

    this.logger.info(`Member ${firstName} ${lastName} created and assigned to department ID ${departmentId}.`)
  

    this.logger.success('Member created and assigned to departments successfully.')
  }
}
