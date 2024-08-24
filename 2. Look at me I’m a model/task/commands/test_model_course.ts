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

    await test?.delete()

    console.log(`Test course deleted.`)

    const od_zera_do_dev = await Course.findBy('name', 'Od zera do programisty 15k')
    await od_zera_do_dev?.load('members')
    console.log(od_zera_do_dev?.members)
  }
}
