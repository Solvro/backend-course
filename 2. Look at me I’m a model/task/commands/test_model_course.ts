import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Course from '#models/course'
import Section from '#models/section'

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

    const backend = await Section.findBy('name', 'Backend')
    const backend_courses = await backend?.related('courses').query()

    console.log(`Test course read from db:\n${JSON.stringify(test)}`)

    console.log(
      `Getting course section by relation: ${(await test?.related('section').query().first())?.name}`
    )

    console.log('Backend courses:')
    backend_courses?.forEach((c) => {
      console.log(`${c.id}---${c.name}`)
    })

    console.log(`Url of course (should be slugified): ${test?.resourceLink}`)

    test ? (test.name = 'Testowy kurs po aktualizacji') : null
    await test?.save()
    console.log(`Url of course after update(should be slugified): ${test?.resourceLink}`)

    await test?.delete()

    console.log(`Test course deleted.`)
  }
}
