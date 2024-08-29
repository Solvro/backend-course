import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Student from '#models/student'
import Course from '#models/course'
import Specialization from '#models/specialization'
import { DateTime } from 'luxon'

export default class TestModels extends BaseCommand {
  static commandName = 'test:models'
  static description = 'Test created models'

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    // student
    this.logger.info('Testing student model...')

    let index = 532757
    await Student.create({
      index: index,
      firstName: 'Bruce',
      lastName: 'Lee',
    })

    const student = await Student.findOrFail(index)
    console.log(`Found student by index ${index}: ${student.firstName} ${student.lastName}`)

    await student.related('specializations').attach(['backend', 'frontend'])
    await student.related('courses').create(
      {
        name: 'React bootcamp',
        specialization: 'frontend',
        description: 'Well written description',
      },
      {
        start_date: DateTime.now().plus({ month: 1, day: 1 }),
      }
    )
    await student.load('specializations')
    await student.load('courses')
    console.log(
      `Student's specializations: ${student.specializations.map((spec) => spec.name).join(', ')}`
    )
    console.log(`Student's courses: ${student.courses.map((course) => course.name).join(', ')}`)

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

    await course.related('spec').associate(await Specialization.findByOrFail('name', 'ml'))
    await course.related('students').attach({
      280568: {
        start_date: DateTime.now(),
      },
      274002: {
        start_date: DateTime.now(),
      },
    })

    await course.load('spec')
    await course.load('students')
    console.log(`Course specialization (${course.specialization}) id: ${course.spec.id}`)
    console.log(
      `Students participating in this course: ${course.students.map((s) => s.index).join(', ')}`
    )

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

    const specializations = await Specialization.query().withCount('courses').withCount('students')
    specializations.forEach((spec) => {
      console.log(
        `${spec.name}: ${spec.$extras.courses_count} course(s) and ${spec.$extras.students_count} student(s)`
      )
    })

    await specialization.merge({ createdAt: specialization.createdAt.minus({ hour: 24 }) }).save()
    console.log(`Specialization creation time after update: ${specialization.createdAt}`)

    await specialization.delete()
    console.log(`Was specialization deleted? ${specialization.$isDeleted}`)

    this.logger.success('Specialization model tests passed!\n')
  }
}
