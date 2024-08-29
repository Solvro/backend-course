import {BaseCommand} from '@adonisjs/core/ace'
import type {CommandOptions} from '@adonisjs/core/types/ace'
import Department from '#models/department'

export default class TestDepartmentModel extends BaseCommand {
  static commandName = 'test:department-model'
  static description = 'Test department model.'

  static options: CommandOptions = {startApp: true}

  private createdDepartmentId: number | null = null

  private async createDepartment() {
    const department = await Department.create({
      name: 'Computer Science',
    })

    this.createdDepartmentId = department.id
    console.log('Department created: ', department)
  }

  private async getDepartment(departmentId: number) {
    const department = await Department.find(departmentId)

    if (department) {
      console.log('Department found: ', department)
    } else {
      console.log('Department not found: ', department)
    }
  }

  private async updateDepartment(departmentId: number) {
    const department = await Department.find(departmentId)

    if (department) {
      department.name = 'Mathematics and Computer Science'
      await department.save()

      console.log('Department Updated:', department)
    } else {
      console.log('Department Not Found')
    }
  }

  private async deleteDepartment(departmentId: number) {
    const department = await Department.find(departmentId)

    if (department) {
      await department.delete()
      console.log('Department Deleted')
    } else {
      console.log('Department Not Found')
    }
  }

  async run() {
    await this.createDepartment()

    if (this.createdDepartmentId !== null) {
      await this.getDepartment(this.createdDepartmentId)
      await this.updateDepartment(this.createdDepartmentId)
      await this.deleteDepartment(this.createdDepartmentId)
    }
  }
}