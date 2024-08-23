import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Course from '#models/course'

export default class TestModelCourse extends BaseCommand {
  static commandName = 'test-model:course'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const course = await Course.create({
      name: 'Testowy kurs',
      description: 'test test',
      sectionId: 1,
    })
    console.log(`created test Course:\n${JSON.stringify(course)}`)

    const test = await Course.findBy('name', 'Testowy kurs')

    console.log(`Test course read from db:\n${JSON.stringify(test)}`)

    await test?.delete()

    console.log(`Test course deleted.`)
  }
}
