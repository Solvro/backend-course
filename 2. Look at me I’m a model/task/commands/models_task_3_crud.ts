import Course from '#models/course'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class ModelsTask3Crud extends BaseCommand {
  static commandName = 'crud:task3'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const action = await this.prompt.choice('What to do:', ['create', 'reads', 'read'])
    if (action === 'create') {
      await this.createCourse()
    } else if (action === 'reads') {
      await this.readCourses()
    } else if (action === 'read') {
      await this.readCourse()
    }

    this.logger.info('Hello world from "ModelsTask3Crud"')
  }
  async createCourse() {
    const name: string = await this.prompt.ask('Enter course name')
    const departmentId: number = Number(await this.prompt.ask('Enter department id'))
    const description: string | null = await this.prompt.ask('Enter course description')
    await Course.create({ name, departmentId, description })
    this.logger.info('Course created')
  }
  async readCourses() {
    const courses = await Course.all()

    for (const course of courses) {
      await course.load('department')
      this.logger.info(`${course.name} - ${course.description} - ${course.department.name}`)
    }
  }
  async readCourse() {
    const id: number = Number(await this.prompt.ask('Enter course id'))
    const course = await Course.find(id)
    await course?.load('department')
    console.log(`${course?.name} - ${course?.description} - ${course?.department.name}`)
  }
}
