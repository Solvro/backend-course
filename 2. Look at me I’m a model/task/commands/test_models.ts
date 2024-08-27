import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Student from '#models/student'
import Course from '#models/course'
import Specialization from '#models/specialization'

export default class TestModels extends BaseCommand {
  static commandName = 'test:models'
  static description = 'Test created models'

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    // student
    this.logger.info('Testing course model...')

    let index = 532757
    await Student.create({
      index: index,
      firstName: 'Bruce',
      lastName: 'Lee',
    })

    const student = await Student.findOrFail(index)
    console.log(`Found student by index ${index}: ${student.firstName} ${student.lastName}`)

    await student.merge({ lastName: 'Willis' }).save()
    console.log(`Student after update: ${student.firstName} ${student.lastName}`)

    await student.delete()
    console.log(`Was student deleted? ${student.$isDeleted}`)

    this.logger.success('Student model tests passed!\n')

    // course
    this.logger.info('Testing course model...')

    let courseName = 'Machine learning crash course'
    await Course.create({
      name: courseName,
      specialization: 'ml',
      description: 'Eloquent description...',
    })

    const course = await Course.findByOrFail('name', courseName)
    console.log(`Found course description: ${course.description}`)

    await course.merge({ description: 'More eloquent description...' }).save()
    console.log(`Course description after update: ${course.description}`)

    await course.delete()
    console.log(`Was course deleted? ${course.$isDeleted}`)

    this.logger.success('Course model tests passed!\n')

    // specialization
    this.logger.info('Testing specialization model...')

    let specName = 'pm'
    await Specialization.create({
      name: specName,
    })

    const specialization = await Specialization.findByOrFail('name', specName)
    console.log(`Found specialization creation time: ${specialization.createdAt}`)

    await specialization.merge({ createdAt: specialization.createdAt.minus({ hour: 24 }) }).save()
    console.log(`Specialization creation time after update: ${specialization.createdAt}`)

    await specialization.delete()
    console.log(`Was specialization deleted? ${specialization.$isDeleted}`)

    this.logger.success('Specialization model tests passed!\n')
  }
}
